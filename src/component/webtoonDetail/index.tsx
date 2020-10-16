import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useWebtoonForWebtoonDetailQuery } from '../../generated/graphql';

import { AdultWidget, PayWidget, CompleteWidget } from '../../styles/Widget';
import { SubTitle, Text } from '../../styles/Typography';

import Thumbnail from '../shared/Thumbnail';

import CollectionCardViewList from './CollectionCardViewList';
import WebtoonCardViewList from './WebtoonCardViewList';
import RandomCardViewList from './RandomCardViewList';

import { dataForWebtoonDetail as data } from '../../util/dummy';
type Props = {
  id: string;
};

const ThumbnailWrapper = styled.div`
  margin-right: ${(props) => props.theme.spacing[2]};
  & > .thumbnail,
  .cover-img {
    border-radius: 5px;
  }
`;

const Profile = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Part = styled.div``;

const Description = styled.div`
  min-height: 50px;
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.Colors.BORDER_COLOR};
  background-color: ${(props) => props.theme.Colors.WHITE};
  padding: ${(props) => props.theme.spacing[4]};
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background-color: ${(props) => props.theme.Colors.WHITE};
  padding: 1px;
  margin-right: ${(props) => props.theme.spacing[0]};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const Authors = styled.div`
  display: flex;
`;

const Bookmark = styled.div`
  width: 25px;
  height: 25px;
  background-color: yellow;
`;

const Option = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

const StyledButton = styled.button`
  width: 236px;
  height: 68px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
`;

const Badges = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[2]};
`;

const WebtoonDetailContainer: FunctionComponent<Props> = ({ id }) => {
  // const { data, loading } = useWebtoonForWebtoonDetailQuery({
  //   variables: { id }
  // });
  return (
    <>
      <Profile>
        <ThumbnailWrapper>
          <Thumbnail size="DEFAULT" src={data?.webtoon.thumbnail} />
        </ThumbnailWrapper>
        <Info>
          <Part>
            <SubTitle>{data?.webtoon.title}</SubTitle>
            <Tags>
              {data?.webtoon.genres?.map((genre) => {
                return <Tag key={genre.code}>#{genre.name}</Tag>;
              })}
            </Tags>
            <Authors>
              {data?.webtoon.authorsConnection.edges?.map((authorEdge) => {
                return (
                  <Text key={authorEdge?.node?.id}>
                    {authorEdge?.node?.name}
                  </Text>
                );
              })}
            </Authors>
          </Part>
          <Part>
            <Badges>
              {data?.webtoon.isAdult && <AdultWidget />}
              {data?.webtoon.isPay && <PayWidget />}
              {data?.webtoon.isFinish && <CompleteWidget />}
            </Badges>
            <a href={data?.webtoon.url} target="_blank">
              <StyledButton>
                <Text>바로가기</Text>
              </StyledButton>
            </a>
          </Part>
        </Info>
        <Option>
          <Bookmark />
        </Option>
      </Profile>
      <Description>{data?.webtoon.description}</Description>
      <WebtoonCardViewList
        webtoonConnection={
          data &&
          data.webtoon.genres &&
          data.webtoon.genres.map((genre) => genre.webtoonsConnection)
        }
      />
      <CollectionCardViewList
        collectionConnection={data && data.webtoon.collectionsConnection}
      />
      <RandomCardViewList />
    </>
  );
};

export default WebtoonDetailContainer;

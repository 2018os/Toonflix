import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import { AdultWidget, PayWidget, CompleteWidget } from '../../styles/Widget';
import { SubTitle, Text } from '../../styles/Typography';

import RandomCardViewList from './RandomCardViewList';

import CardViewList from '../shared/CardViewList';
import CollectionCard from '../shared/CollectionCard';
import Comments from '../shared/Comments';
import Thumbnail from '../shared/Thumbnail';
import WebtoonCard from '../shared/WebtoonCard';

import { useWebtoonForWebtoonDetailQuery } from '../../generated/graphql';
import { Colors, ImgSizes, spacing } from '../../util/theme';

// import { dataForWebtoonDetail as data } from '../../util/dummy';

type Props = {
  id: string;
};

const ThumbnailWrapper = styled.div`
  margin-right: ${spacing[2]};
  & > .thumbnail,
  .cover-img {
    border-radius: 5px;
  }
`;

const Profile = styled.div`
  display: flex;
  position: relative;
  margin-bottom: ${spacing[2]};
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
  border: solid 1px ${Colors.BORDER_COLOR};
  background-color: ${Colors.WHITE};
  padding: ${spacing[4]};
`;

const Tags = styled.div`
  display: flex;
`;

const Tag = styled.div`
  background-color: ${Colors.WHITE};
  padding: 1px;
  margin-right: ${spacing[0]};
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
  background-color: ${Colors.PRIMARY_COLOR};
`;

const Badges = styled.div`
  display: flex;
  margin-bottom: ${spacing[2]};
`;

const WebtoonDetailContainer: FunctionComponent<Props> = ({ id }) => {
  const { data, loading } = useWebtoonForWebtoonDetailQuery({
    variables: { id }
  });
  return (
    <>
      <Section>
        <Profile>
          <ThumbnailWrapper>
            <Thumbnail size={ImgSizes.DEFAULT} src={data?.webtoon.thumbnail} />
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
      </Section>
      <Section>
        <Comments comment={data?.webtoon.commentsConnection} />
      </Section>
      {data && !loading ? (
        data.webtoon.genres?.map((genre) => {
          if (genre.webtoonsConnection) {
            return (
              <Section
                key={`webtoon-detail-webtoon-card-view-list-section-${genre.code}`}
              >
                <CardViewList
                  title={`"${genre.name}" 비슷한 작품`}
                  type="pagination"
                >
                  {genre.webtoonsConnection.edges?.map((edge) => {
                    if (edge?.node) {
                      const webtoon = edge.node;
                      return (
                        <WebtoonCard
                          webtoon={webtoon}
                          key={`webtoon-detail-webtoon-card-${webtoon.id}`}
                        />
                      );
                    } else {
                      return <div>webtoon data laoding</div>;
                    }
                  })}
                </CardViewList>
              </Section>
            );
          }
        })
      ) : (
        <div>Loading...</div>
      )}
      {data && !loading ? (
        <Section>
          <CardViewList title="작품이 포함된 컬렉션" type="pagination">
            {data.webtoon.collectionsConnection.edges &&
              data.webtoon.collectionsConnection.edges.map((edge) => {
                if (edge?.node) {
                  const collection = edge.node;
                  return (
                    <CollectionCard
                      collection={collection}
                      key={`webtoon-detail-collection-card-${collection.id}`}
                    />
                  );
                } else {
                  return <div>collection card loading</div>;
                }
              })}
          </CardViewList>
        </Section>
      ) : (
        <div>collectionCard Loading</div>
      )}
      <Section>
        <RandomCardViewList />
      </Section>
    </>
  );
};

export default WebtoonDetailContainer;

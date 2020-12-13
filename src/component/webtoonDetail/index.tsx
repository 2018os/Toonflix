import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Section from '../../layout/Section';

import {
  AdultBadge,
  CompleteBadge,
  PayBadge,
  NaverBadge
} from '../../styles/Badget';
import Button from '../../styles/Button';
import { SubTitle, Text } from '../../styles/Typography';

import RandomCardViewList from './RandomCardViewList';

import CardViewList from '../shared/CardViewList';
import CollectionCard from '../shared/CollectionCard';
import Comments from '../shared/Comments';
import { EmptyWebtoonCard, EmptyCollectionCard } from '../shared/Empty';
import Link from '../shared/Link';
import {
  LoadingCardViewList,
  LoadingCollectionCard,
  LoadingWebtoonCard
} from '../shared/Loading';
import Tag from '../shared/Tag';
import Tags from '../shared/Tags';
import Thumbnail from '../shared/Thumbnail';
import WebtoonCard from '../shared/WebtoonCard';

import { useWebtoonForWebtoonDetailQuery } from '../../generated/graphql';
import {
  Colors,
  FontSizes,
  ImgSizes,
  IconSizes,
  spacing
} from '../../util/theme';

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

const Flex = styled.div`
  display: flex;
`;

const Profile = styled(Flex)`
  position: relative;
  margin-bottom: ${spacing[2]};
`;

const Info = styled(Flex)`
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

const Authors = styled(Flex)``;

const Bookmark = styled.div`
  width: 25px;
  height: 25px;
  background-color: yellow;
`;

const Option = styled(Flex)`
  position: absolute;
  right: 0;
`;

const ReadButton = styled(Button)`
  width: 236px;
  height: 68px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin-right: ${spacing[1]};
  & > a {
    text-decoration: none;
    color: unset;
  }
`;

const Badges = styled(Flex)`
  margin-bottom: ${spacing[2]};
`;

const WebtoonDetailContainer: FunctionComponent<Props> = ({ id }) => {
  const { data, loading, fetchMore } = useWebtoonForWebtoonDetailQuery({
    variables: { id, afterCommentId: '' }
  });
  const lastComment = data?.webtoon.commentsConnection.pageInfo.endCursor;
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
                  return (
                    <Link
                      key={genre.code}
                      linkProps={{
                        href: {
                          pathname: '/category',
                          query: {
                            keyword: genre.name
                          }
                        }
                      }}
                    >
                      <Tag>#{genre.name}</Tag>
                    </Link>
                  );
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
                {data?.webtoon.isAdult && <AdultBadge />}
                {data?.webtoon.isPay && <PayBadge />}
                {data?.webtoon.isFinish && <CompleteBadge />}
              </Badges>
              <Flex>
                <ReadButton primary>
                  <a target="_blank" rel="noreferrer" href={data?.webtoon.url}>
                    <Text size={FontSizes.DEFAULT}>바로가기</Text>
                  </a>
                </ReadButton>
                {data?.webtoon.platform === 'NAVER' ? (
                  <NaverBadge size={IconSizes.LARGEST} />
                ) : null}
              </Flex>
            </Part>
          </Info>
          <Option>
            <Bookmark />
          </Option>
        </Profile>
        <Description>{data?.webtoon.description}</Description>
      </Section>
      <Section>
        <Comments
          comments={data?.webtoon.commentsConnection}
          onLoadMore={() => {
            fetchMore({
              variables: {
                id,
                afterCommentId: lastComment
              }
            });
          }}
        />
      </Section>
      {data && !loading
        ? data.webtoon.genres?.map((genre) => {
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
                      }
                      return (
                        <LoadingWebtoonCard
                          key={`loading-webtoon-card-${genre.code}`}
                        />
                      );
                    })}
                    <EmptyWebtoonCard src="/category" keyword={genre.name} />
                  </CardViewList>
                </Section>
              );
            }
            return (
              <LoadingCardViewList
                key={`loading-card-view-list-${genre.code}`}
              />
            );
          })
        : null}
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
                }
                return (
                  <LoadingCollectionCard
                    key={`loading-collection-card-${edge?.__typename}`}
                  />
                );
              })}
            <EmptyCollectionCard
              src="/collections"
              keyword={data.webtoon.title}
            />
          </CardViewList>
        </Section>
      ) : (
        <LoadingCardViewList />
      )}
      <Section>
        <RandomCardViewList />
      </Section>
    </>
  );
};

export default WebtoonDetailContainer;

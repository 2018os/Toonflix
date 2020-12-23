import React, { FunctionComponent, useState } from 'react';
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

import AddToCollectionModal from './AddToCollectionModal';
import RandomCardViewList from './RandomCardViewList';

import Dropdown, { Option } from '../shared/Dropdown';
import CardViewList from '../shared/CardViewList';
import CollectionCard from '../shared/CollectionCard';
import Comments from '../shared/Comments';
import { EmptyWebtoonCard, EmptyCollectionCard } from '../shared/Empty';
import Link from '../shared/Link';
import { LoadingComments, LoadingCardViewList } from '../shared/Loading';
import Tag from '../shared/Tag';
import Tags from '../shared/Tags';
import Thumbnail from '../shared/Thumbnail';
import WebtoonCard from '../shared/WebtoonCard';

import {
  useWebtoonForWebtoonDetailQuery,
  WebtoonForWebtoonDetailQuery,
  WebtoonForWebtoonDetailQueryVariables,
  WebtoonForWebtoonDetailDocument,
  usePostCommentForWebtoonDetailMutation
} from '../../generated/graphql';

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

const DropDownWrapper = styled.div`
  margin-left: auto;
`;

const Bookmark = styled.img.attrs({
  src: '/static/icon/more.svg'
})`
  cursor: pointer;
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
  const [showDropdown, toggleDropdown] = useState(false);
  const [showAddToCollectionModal, toggleModal] = useState(false);
  const { data, loading, fetchMore } = useWebtoonForWebtoonDetailQuery({
    variables: { id, afterCommentId: '' }
  });
  const [postComment] = usePostCommentForWebtoonDetailMutation({
    update: (cache, mutationResult) => {
      const newComment = mutationResult.data?.postComment;
      const existing = cache.readQuery<
        WebtoonForWebtoonDetailQuery,
        WebtoonForWebtoonDetailQueryVariables
      >({
        query: WebtoonForWebtoonDetailDocument,
        variables: { id, afterCommentId: '' }
      });
      if (existing && existing.webtoon.comments.edges && newComment) {
        cache.writeQuery({
          query: WebtoonForWebtoonDetailDocument,
          variables: { id, afterCommentId: '' },
          data: {
            ...existing,
            webtoon: {
              ...existing.webtoon,
              comments: {
                ...existing.webtoon.comments,
                edges: [
                  {
                    __typename: 'CommentEdge',
                    node: newComment
                  },
                  ...existing.webtoon.comments.edges
                ]
              }
            }
          }
        });
      }
    }
  });
  const afterCommentId = data?.webtoon.comments.pageInfo.endCursor;
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
                {data?.webtoon.authors.edges?.map((authorEdge) => {
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
          <DropDownWrapper>
            <Dropdown
              isOpen={showDropdown}
              openButton={
                <Bookmark onClick={() => toggleDropdown(!showDropdown)} />
              }
            >
              <Option onClick={() => toggleModal(true)}>컬렉션에 추가</Option>
              <Option>
                <Text color={Colors.RED}>신고 / 수정요청</Text>
              </Option>
            </Dropdown>
          </DropDownWrapper>
        </Profile>
        <Description>{data?.webtoon.description}</Description>
      </Section>
      <Section>
        {data && !loading ? (
          <Comments
            comments={data.webtoon.comments}
            modalTitle={data.webtoon.title}
            onPostComment={async (message: string) => {
              await postComment({
                variables: { webtoonId: data.webtoon.id, message }
              });
            }}
            onLoadMore={() => {
              fetchMore({
                variables: {
                  id,
                  afterCommentId
                }
              });
            }}
          />
        ) : (
          <LoadingComments />
        )}
      </Section>
      {data && !loading ? (
        data.webtoon.genres?.map((genre) => {
          if (genre.webtoons) {
            return (
              <Section
                key={`webtoon-detail-webtoon-card-view-list-section-${genre.code}`}
              >
                <CardViewList
                  title={`"${genre.name}" 비슷한 작품`}
                  type="pagination"
                >
                  {genre.webtoons.edges?.map((edge) => {
                    if (edge?.node) {
                      const webtoon = edge.node;
                      return (
                        <WebtoonCard
                          webtoon={webtoon}
                          key={`webtoon-detail-webtoon-card-${webtoon.id}`}
                        />
                      );
                    }
                    return null;
                  })}
                  <EmptyWebtoonCard src="/category" keyword={genre.name} />
                </CardViewList>
              </Section>
            );
          }
          return null;
        })
      ) : (
        <LoadingCardViewList range={1} cardType="webtoon" />
      )}
      {data && !loading ? (
        <Section>
          <CardViewList title="작품이 포함된 컬렉션" type="pagination">
            {data.webtoon.collections.edges &&
              data.webtoon.collections.edges.map((edge) => {
                if (edge?.node) {
                  const collection = edge.node;
                  return (
                    <CollectionCard
                      collection={collection}
                      key={`webtoon-detail-collection-card-${collection.id}`}
                    />
                  );
                }
                return null;
              })}
            <EmptyCollectionCard
              src="/collections"
              keyword={data.webtoon.title}
            />
          </CardViewList>
        </Section>
      ) : (
        <LoadingCardViewList range={1} cardType="collection" />
      )}
      <Section>
        <RandomCardViewList />
      </Section>
      <AddToCollectionModal
        webtoonId={id}
        isOpen={showAddToCollectionModal}
        close={() => toggleModal(false)}
      />
    </>
  );
};

export default WebtoonDetailContainer;

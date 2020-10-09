import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { useWebtoonForWebtoonDetailQuery } from '../../generated/graphql';

import { AdultWidget, PayWidget, CompleteWidget } from '../../styles/Widget';
import { SubTitle, Text } from '../../styles/Typography';

import Thumbnail from '../shared/Thumbnail';

import CollectionCardViewList from './CollectionCardViewList';
import WebtoonCardViewList from './WebtoonCardViewList';
import RandomCardViewList from './RandomCardViewList';

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

const data = {
  webtoon: {
    id: 'MTEwNzc=',
    title: '[특집]15인의 반전만화',
    description: '내가 알던 작가 맞아? 15인 작가의 스타일 대반전!',
    url: 'http://webtoon.daum.net/webtoon/view/reversal',
    thumbnail:
      'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/56B059D70251060001',
    isPay: false,
    isAdult: false,
    isFinish: false,
    platform: 'DAUM',
    authorsConnection: {
      edges: [
        {
          node: {
            id: 'MTY5Ng==',
            name: 'DWEBTOON'
          }
        }
      ]
    },
    collectionsConnection: {
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false
      },
      edges: [
        {
          node: {
            id: 'MTAwMDAw',
            title: 'first-collection',
            webtoonsConnection: {
              edges: [
                {
                  node: {
                    id: 'MTEwNzc=',
                    thumbnail:
                      'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/56B059D70251060001'
                  }
                },
                {
                  node: {
                    id: 'MTEwNzg=',
                    thumbnail:
                      'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/5625F69F0123110001'
                  }
                },
                {
                  node: {
                    id: 'MTEwNzk=',
                    thumbnail:
                      'http://t1.daumcdn.net/webtoon/op/72af502e501450518fa4d108743027c88afd72a4'
                  }
                }
              ]
            }
          }
        }
      ]
    },
    genres: [
      {
        code: 'comic',
        name: '코믹',
        webtoonsConnection: {
          pageInfo: {
            hasNextPage: true,
            hasPreviousPage: true
          },
          edges: [
            {
              node: {
                id: 'MTEwNzg=',
                title: '[PC개편특집] 달라진 그녀석',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTY5Ng==',
                        name: 'DWEBTOON'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'comic',
                    name: '코믹'
                  }
                ],
                isAdult: false,
                isFinish: false,
                isPay: false,
                thumbnail:
                  'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/5625F69F0123110001'
              }
            },
            {
              node: {
                id: 'MTEwNzI=',
                title: 'SM 플레이어',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTAyMA==',
                        name: '랑또'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'comic',
                    name: '코믹'
                  }
                ],
                isAdult: false,
                isFinish: true,
                isPay: false,
                thumbnail:
                  'https://image-comic.pstatic.net/webtoon/521533/thumbnail/thumbnail_IMAG19_migrated_521533.jpg'
              }
            },
            {
              node: {
                id: 'MTEwODU=',
                title: '12단곡괭이',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTMxNQ==',
                        name: '이무기'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'action',
                    name: '액션'
                  },
                  {
                    code: 'comic',
                    name: '코믹'
                  }
                ],
                isAdult: false,
                isFinish: false,
                isPay: false,
                thumbnail:
                  'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/55A7319C024C1D0001'
              }
            },
            {
              node: {
                id: 'MTEwOTI=',
                title: '2018 다음웹툰 능력고사',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTY5Ng==',
                        name: 'DWEBTOON'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'comic',
                    name: '코믹'
                  }
                ],
                isAdult: false,
                isFinish: false,
                isPay: false,
                thumbnail:
                  'http://t1.daumcdn.net/webtoon/op/1c82fc7ad99d2b0dc6774729a4f8530d20a6307d'
              }
            },
            {
              node: {
                id: 'MTExMDk=',
                title: '가딩 : 그녀는 나의 웬수',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTcyMQ==',
                        name: 'BUDDY'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'comic',
                    name: '코믹'
                  },
                  {
                    code: 'fantasy',
                    name: '판타지'
                  }
                ],
                isAdult: false,
                isFinish: true,
                isPay: false,
                thumbnail:
                  'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/56E2763B047AA20001'
              }
            },
            {
              node: {
                id: 'MTExMjU=',
                title: '개밥도토리',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MjQ3NQ==',
                        name: '망기'
                      }
                    },
                    {
                      node: {
                        id: 'MTczNg==',
                        name: '호형'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'comic',
                    name: '코믹'
                  },
                  {
                    code: 'drama',
                    name: '드라마'
                  }
                ],
                isAdult: false,
                isFinish: true,
                isPay: false,
                thumbnail: 'http://t1.daumcdn.net/cartoon/58A1590B061CED0001'
              }
            }
          ]
        }
      },
      {
        code: 'drama',
        name: '드라마',
        webtoonsConnection: {
          pageInfo: {
            hasNextPage: true,
            hasPreviousPage: true
          },
          edges: [
            {
              node: {
                id: 'MTEwNzQ=',
                title: 'Yes my boss(예스마이보스)',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTY5Mg==',
                        name: '김밀콩'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'drama',
                    name: '드라마'
                  }
                ],
                isAdult: false,
                isFinish: true,
                isPay: false,
                thumbnail:
                  'https://image-comic.pstatic.net/webtoon/746747/thumbnail/thumbnail_IMAG19_9ffe759e-8cc6-4a96-9ff8-f749ca0a0607.jpg'
              }
            },
            {
              node: {
                id: 'MTEwODg=',
                title: '19년 뽀삐',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTcwNA==',
                        name: '마영신'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'drama',
                    name: '드라마'
                  }
                ],
                isAdult: false,
                isFinish: true,
                isPay: false,
                thumbnail:
                  'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/562D944F03322E0001'
              }
            },
            {
              node: {
                id: 'MTEwOTc=',
                title: '4버디스',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MjM2Nw==',
                        name: '박진환'
                      }
                    },
                    {
                      node: {
                        id: 'MTcxMQ==',
                        name: '전극진'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'drama',
                    name: '드라마'
                  }
                ],
                isAdult: true,
                isFinish: true,
                isPay: false,
                thumbnail:
                  'http://t1.daumcdn.net/webtoon/op/1d70f86c77660494c92ceaa28630955b253bc977'
              }
            },
            {
              node: {
                id: 'MTEwOTk=',
                title: '4학년',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTcxMw==',
                        name: '봉수'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'drama',
                    name: '드라마'
                  },
                  {
                    code: 'thrill',
                    name: '스릴러'
                  }
                ],
                isAdult: false,
                isFinish: false,
                isPay: true,
                thumbnail:
                  'http://t1.daumcdn.net/webtoon/op/8a3ff7348dba40a8190b6290d11c2d6ba3cf676f'
              }
            },
            {
              node: {
                id: 'MTEwOTM=',
                title: '20세 보고서',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTcwNw==',
                        name: 'YSE'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'drama',
                    name: '드라마'
                  }
                ],
                isAdult: false,
                isFinish: true,
                isPay: false,
                thumbnail: 'http://t1.daumcdn.net/cartoon/58AA9C050544BF0001'
              }
            },
            {
              node: {
                id: 'MTEwOTQ=',
                title: '26년',
                authorsConnection: {
                  edges: [
                    {
                      node: {
                        id: 'MTcwOA==',
                        name: '강풀'
                      }
                    }
                  ]
                },
                genres: [
                  {
                    code: 'drama',
                    name: '드라마'
                  }
                ],
                isAdult: false,
                isFinish: false,
                isPay: false,
                thumbnail:
                  'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/55A8653102783D0003'
              }
            }
          ]
        }
      }
    ]
  }
};

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

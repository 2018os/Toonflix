import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../../layout/Container';

import WebtoonCardViewList from './WebtoonCardViewList';

import SearchBar from '../shared/SearchBar';

import { useCollectionsForMainQuery } from '../../generated/graphql';

const Container = styled.div`
  min-width: 1024px;
  padding-bottom: 100px;
  background: ${(props) => props.theme.Colors.GRAY};
`;

const Button = styled.div`
  line-height: 1.5;
  width: 572px;
  height: 150px;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
  font-size: 66px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.Colors.GRAY};
`;

const ButtonWrapper = styled.div`
  padding-top: ${(props) => props.theme.spacing[6]};
  width: fit-content;
  margin: auto;
`;

const SearchBarWrapper = styled.div`
  width: 992px;
  margin-top: ${(props) => props.theme.spacing[5]};
`;

const LinkButtonWrapper = styled.div`
  display: flex;
  margin-top: ${(props) => props.theme.spacing[3]};
  justify-content: center;
`;

const LinkButton = styled.div`
  cursor: pointer;
  font-size: ${(props) => props.theme.FontSizes.LARGE};
  font-weight: bold;
  color: ${(props) => props.theme.Colors.WHITE};
  width: 234px;
  height: 46px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
`;

const data = {
  collections: {
    edges: [
      {
        node: {
          id: 'MTAwMDAw',
          title: 'first-collection',
          description: 'test',
          webtoonsConnection: {
            pageInfo: {
              hasNextPage: false,
              hasPreviousPage: false
            },
            edges: [
              {
                node: {
                  id: 'MTEwNzc=',
                  title: '[특집]15인의 반전만화',
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
                    },
                    {
                      code: 'drama',
                      name: '드라마'
                    }
                  ],
                  isAdult: false,
                  isFinish: false,
                  isPay: false,
                  thumbnail:
                    'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/56B059D70251060001'
                }
              },
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
                  id: 'MTEwNzk=',
                  title: '<연애가 제일 쉬웠어요> 실전, 연애노트',
                  authorsConnection: {
                    edges: [
                      {
                        node: {
                          id: 'MTY5Nw==',
                          name: '참치캔'
                        }
                      }
                    ]
                  },
                  genres: [
                    {
                      code: 'romance',
                      name: '로맨스'
                    }
                  ],
                  isAdult: false,
                  isFinish: false,
                  isPay: false,
                  thumbnail:
                    'http://t1.daumcdn.net/webtoon/op/72af502e501450518fa4d108743027c88afd72a4'
                }
              }
            ]
          }
        }
      },
      {
        node: {
          id: 'MTAwMDAx',
          title: 'second collection!',
          description: 'This is test collection2',
          webtoonsConnection: {
            pageInfo: {
              hasNextPage: true,
              hasPreviousPage: false
            },
            edges: [
              {
                node: {
                  id: 'MTA4OTE=',
                  title: '코끼리를 끌어안는 방법',
                  authorsConnection: {
                    edges: [
                      {
                        node: {
                          id: 'MTQwNQ==',
                          name: '백희정'
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
                    'https://image-comic.pstatic.net/webtoon/530311/thumbnail/thumbnail_IMAG19_migrated_530311.jpg'
                }
              },
              {
                node: {
                  id: 'MTA5NjQ=',
                  title: '프린세스 5부',
                  authorsConnection: {
                    edges: [
                      {
                        node: {
                          id: 'MTYzNA==',
                          name: '한승원'
                        }
                      }
                    ]
                  },
                  genres: [
                    {
                      code: 'romance',
                      name: '로맨스'
                    }
                  ],
                  isAdult: false,
                  isFinish: true,
                  isPay: false,
                  thumbnail:
                    'https://image-comic.pstatic.net/webtoon/647948/thumbnail/title_thumbnail_20150310211611_t220x202.jpg'
                }
              },
              {
                node: {
                  id: 'MTAwOTk=',
                  title: '고삼이 집나갔다',
                  authorsConnection: {
                    edges: [
                      {
                        node: {
                          id: 'MTA3MA==',
                          name: '미티'
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
                    'https://image-comic.pstatic.net/webtoon/400737/thumbnail/thumbnail_IMAG19_migrated_400737.jpg'
                }
              },
              {
                node: {
                  id: 'MTExMTM=',
                  title: '가우시안 블러',
                  authorsConnection: {
                    edges: [
                      {
                        node: {
                          id: 'MTcyNQ==',
                          name: '박시인'
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
                    'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/5552AFF5025AC10001'
                }
              }
            ]
          }
        }
      }
    ]
  }
};

function MainContainer() {
  // const { data, loading } = useCollectionsForMainQuery();
  const loading = false;
  return (
    <Container>
      <ContentContainer>
        <ButtonWrapper>
          <Button>로고</Button>
        </ButtonWrapper>
        <SearchBarWrapper>
          <SearchBar isMain={true} />
        </SearchBarWrapper>
        <LinkButtonWrapper>
          <LinkButton>컬렉션 바로가기</LinkButton>
          <LinkButton style={{ marginLeft: '18px' }}>
            컬렉션 바로가기
          </LinkButton>
        </LinkButtonWrapper>
        {data && !loading ? (
          data.collections.edges?.map((collection, index) => {
            return (
              <WebtoonCardViewList
                key={`webtoon-card-list-${index}`}
                webtoonConnection={collection && collection.node}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </ContentContainer>
    </Container>
  );
}

export default MainContainer;

export const loading = false;

export const dummyWebtoonCard = {
  id: 'MTEwNzc=',
  title: '[특집]15인의 반전만화 DUMMY',
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
};

export const dummyCollectionCard = {
  id: 'MTAwMDAw',
  title: 'first-collection dummy',
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
};

export const dataForMain = {
  collections: {
    edges: [
      {
        node: {
          id: 'MTAwMDAw',
          title: 'first-collection-dummy',
          description: 'test',
          webtoonsConnection: {
            pageInfo: {
              hasNextPage: false,
              hasPreviousPage: false
            },
            edges: [
              {
                node: dummyWebtoonCard
              },
              {
                node: dummyWebtoonCard
              },
              {
                node: dummyWebtoonCard
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
                node: dummyWebtoonCard
              },
              {
                node: dummyWebtoonCard
              },
              {
                node: dummyWebtoonCard
              }
            ]
          }
        }
      }
    ]
  }
};

export const dataForWebtoonDetail = {
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
          node: dummyCollectionCard
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
              node: dummyWebtoonCard
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
              node: dummyWebtoonCard
            },
            {
              node: dummyWebtoonCard
            }
          ]
        }
      }
    ]
  }
};

export const dataForRandomCardView = {
  randomWebtoons: [
    {
      id: 'MTA1MjQ=',
      thumbnail:
        'https://image-comic.pstatic.net/webtoon/736928/thumbnail/thumbnail_IMAG19_dd81d056-a2ed-4809-bca3-e2d05aa055de.jpg'
    },
    {
      id: 'MTA1MTI=',
      thumbnail:
        'https://image-comic.pstatic.net/webtoon/738145/thumbnail/thumbnail_IMAG19_b3c7922b-81e9-4039-96ac-588153462fe3.jpg'
    },
    {
      id: 'MTAwOTU=',
      thumbnail:
        'https://image-comic.pstatic.net/webtoon/729767/thumbnail/thumbnail_IMAG19_faf625b4-86b8-4927-b626-61257c4986f9.jpg'
    },
    {
      id: 'MTEzNjI=',
      thumbnail:
        'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/556FE04302721A0001'
    },
    {
      id: 'MTIwNTc=',
      thumbnail:
        'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/55A740A9027F8E0003'
    },
    {
      id: 'MTIxNzc=',
      thumbnail:
        'http://t1.daumcdn.net/webtoon/op/db4a5ce95e03a644193f0169555bd3c5b92fc79f'
    }
  ]
};

export const dataForCollectionList = {
  collections: {
    edges: [
      {
        node: dummyCollectionCard
      },
      {
        node: dummyCollectionCard
      }
    ]
  }
};

export const refetch = () => console.log('refetch');

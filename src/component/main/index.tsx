import React from 'react';
import styled from 'styled-components';

import ContentContainer from '../../layout/Container';

import CardViewList from '../shared/CardViewList/index';

import { spacing, IconSizes } from '../../util/theme';

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

const SearchBar = styled.input`
  padding: 0 ${(props) => props.theme.spacing[3]};
  width: 100%;
  height: 116px;
  font-size: ${(props) => props.theme.FontSizes.H2};
  font-weight: 500;
  border: none;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.TextColors.PRIMARY_COLOR};
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: ${(props) => props.theme.spacing[5]};
  width: 992px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  border: solid
    ${(props) =>
      ` ${props.theme.spacing[0]} ${props.theme.Colors.PRIMARY_COLOR}`};
  background-color: ${(props) => props.theme.Colors.WHILE};
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
  color: ${(props) => props.theme.Colors.WHILE};
  width: 234px;
  height: 46px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.Colors.PRIMARY_COLOR};
`;

const CardViewContainer = styled.div`
  margin: auto;
  width: fit-content;
`;

const example = [
  {
    collectionTitle: '최강 인기 컬렉션',
    desc: '세상에서 제일 인기있는 웹툰들을 만나보세요',
    webtoonList: [
      {
        id: 'helper',
        title: '헬퍼',
        writer: '김승엽',
        category: '액션',
        adultUsage: true,
        completion: true,
        paidService: true,
        thumbnail:
          'http://i1.cartoon.daumcdn.net/svc/image/U03/cartoon/56B059D70251060001'
      },
      {
        id: 'helper',
        title: '헬퍼2',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: false,
        paidService: true,
        thumbnail:
          'https://image-comic.pstatic.net/webtoon/697535/thumbnail/thumbnail_IMAG19_32c2628b-ac61-4f3f-aaf6-8b7add219763.jpg'
      },
      {
        id: 'helper',
        title: '헬퍼3',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼4',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      }
    ]
  },
  {
    collectionTitle: '킬링타임 컬렉션',
    desc: '할거없으면 이거나 봐보세요',
    webtoonList: [
      {
        id: 'helper',
        title: '헬퍼',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼2',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼3',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼4',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      }
    ]
  },
  {
    collectionTitle: '킬링타임 컬렉션2',
    desc: '또 보세용',
    webtoonList: [
      {
        id: 'helper',
        title: '헬퍼',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼2',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼3',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼4',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      }
    ]
  },
  {
    collectionTitle: '최강 인기였던 컬렉션',
    desc: '세상에서 제일 인기있었던 웹툰들을 만나보세요',
    webtoonList: [
      {
        id: 'helper',
        title: '헬퍼',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼2',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼3',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      },
      {
        id: 'helper',
        title: '헬퍼4',
        writer: '김승엽',
        category: '액션',
        adultUsage: false,
        completion: true,
        paidService: true
      }
    ]
  }
];

function MainContainer() {
  return (
    <Container>
      <ContentContainer>
        <div>
          <ButtonWrapper>
            <Button>로고</Button>
          </ButtonWrapper>
          <SearchBarWrapper>
            <img
              width={IconSizes.LARGER}
              height={IconSizes.LARGER}
              src="/static/icon/search.svg"
              style={{ marginLeft: spacing[5] }}
            />
            <SearchBar placeholder="컬렉션 장르, 키워드, 작가 등을 검색해보세요" />
          </SearchBarWrapper>
          <LinkButtonWrapper>
            <LinkButton>컬렉션 바로가기</LinkButton>
            <LinkButton style={{ marginLeft: '18px' }}>
              컬렉션 바로가기
            </LinkButton>
          </LinkButtonWrapper>
          {example.map((webtoonCollection: any, index: number) => (
            <CardViewContainer
              key={webtoonCollection.collectionTitle}
              style={{ marginTop: index === 0 ? spacing[6] : spacing[5] }}
            >
              <CardViewList {...webtoonCollection} />
            </CardViewContainer>
          ))}
        </div>
      </ContentContainer>
    </Container>
  );
}

export default MainContainer;

import React from 'react';
import styled from 'styled-components';

// layout
import SharedContainerComponent from './Container';

import { FontSizes, spacing } from '../util/theme';

// styles
import { Text } from '../styles/Typography';

const Container = styled(SharedContainerComponent)`
  height: 240px;
`;

const ContentWrapper = styled.div`
  width: fit-content;
  padding: 30px ${spacing[1]};
  margin: auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  margin-left: ${spacing[4]};
  margin-top: 18px;
`;

const MenuText = styled.div`
  font-size: 14px;
  line-height: 1.71;
  color: #000000;
`;

const DescriptionWrapper = styled.div`
  display: flex;
`;

const Company = styled.div`
  font-size: 14px;
  line-height: 1.71;
  margin-top: 21px;
`;

const Description = styled.div`
  margin-left: 190px;
  width: 720px;
  height: 38px;
  font-size: ${FontSizes.SMALLEST};
  font-weight: 300;
  line-height: 1.67;
  color: #000000;
`;

const Footer = () => {
  const menuList = [
    '회사소개',
    '사업자정보확인',
    '이용약관',
    '개인정보처리방침',
    '고객지원/공지사항'
  ];
  return (
    <Container>
      <ContentWrapper>
        <div style={{ display: 'flex' }}>
          <Text size={FontSizes.LARGEST} bold>
            TOONFLIX
          </Text>
          <MenuWrapper>
            {menuList.map((menu: string, index: number) => (
              <MenuText
                key={menu}
                style={{ marginLeft: index === 0 ? '0px' : spacing[2] }}
              >
                {menu}
              </MenuText>
            ))}
          </MenuWrapper>
        </div>
        <DescriptionWrapper>
          <Company>
            (주)툰플릭스
            <br />
            대표 김승엽
          </Company>
          <Description>
            가나다라마바사아자차카타파하ABCEDFGHIJKLMNOP가나다라마바사아자차카타파하ABCEDFGHIJKLMNOP가나다라마바사아자차카타파하ABC
            가나다라마바사아자차카타파하ABCEDFGHIJKLMNOP가나다라마바사아자차카타파하ABCEDFGHIJKLMNOP
          </Description>
        </DescriptionWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';
import { Colors, FontSizes, TextColors } from '../../../util/theme';
import CardView, { Props as WebToon } from '../CardView/index';

// const Container = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${FontSizes.LARGER};
  font-weight: 500;
  color: ${TextColors.PRIMARY_COLOR};
`;

const Description = styled.div`
  margin-left: 12px;
  font-size: ${FontSizes.SMALL};
  font-weight: 500;
  line-height: 1.5;
  color: ${Colors.BLACK};
`;

const Button = styled.div`
  cursor: pointer;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7a7a7a;
  font-size: ${FontSizes.H3};
`;

const CardViewWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-top: 24px;
`;

interface Props {
  collectionTitle: string;
  desc: string;
  webtoonList: WebToon[];
}

function CardViewList({ collectionTitle, desc, webtoonList }: Props) {
  return (
    <>
      <ContentWrapper>
        <ContentWrapper>
          <Title>{collectionTitle}</Title>
          <Description>{desc}</Description>
        </ContentWrapper>
        <ContentWrapper>
          <Button>{'<'}</Button>
          <Button style={{ marginLeft: '4px' }}>{'>'}</Button>
        </ContentWrapper>
      </ContentWrapper>
      <CardViewWrapper>
        {webtoonList.map((webtoon: WebToon, index: number) => {
          return (
            <div
              key={webtoon.title}
              style={{ marginLeft: index === 0 ? '0px' : '16px' }}
            >
              <CardView {...webtoon} />
            </div>
          );
        })}
      </CardViewWrapper>
    </>
  );
}

export default CardViewList;

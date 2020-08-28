import React from 'react';
import styled from 'styled-components';
import CardView, { Props as Webtoon } from '../CardView/index';
import { spacing } from '../../../util/theme';

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.FontSizes.LARGER};
  font-weight: 500;
  color: ${(props) => props.theme.TextColors.PRIMARY_COLOR};
`;

const Description = styled.div`
  line-height: 1.5;
  margin-left: 12px;
  font-size: ${(props) => props.theme.FontSizes.SMALL};
  font-weight: 500;
  color: ${(props) => props.theme.Colors.BLACK};
`;

const Button = styled.div`
  cursor: pointer;
  width: 40px;
  height: 30px;
  border-radius: 10px;
  box-shadow: ${(props) =>
    `0 2px ${props.theme.spacing[0]} 0 rgba(0, 0, 0, 0.16)`};
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.TextColors.GRAY};
  font-size: ${(props) => props.theme.FontSizes.H3};
`;

const CardViewWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-top: ${(props) => props.theme.spacing[0]};
`;

interface Props {
  collectionTitle: string;
  desc: string;
  webtoonList: Webtoon[];
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
          <Button style={{ marginLeft: spacing[0] }}>{'>'}</Button>
        </ContentWrapper>
      </ContentWrapper>
      <CardViewWrapper>
        {webtoonList.map((webtoon: Webtoon, index: number) => {
          return (
            <div
              key={webtoon.title}
              style={{ marginLeft: index === 0 ? '0px' : spacing[2] }}
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

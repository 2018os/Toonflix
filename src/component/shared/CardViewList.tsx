import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../util/theme';

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

const Button = styled.button`
  border: none;
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
  title: string;
  description?: string;
  pageInfo: any;
  children: React.ReactNode;
}

function CardViewList({ title, description, pageInfo, children }: Props) {
  return (
    <>
      <ContentWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </ContentWrapper>
        <ContentWrapper>
          <Button disabled={!pageInfo.hasPreviousPage}>{'<'}</Button>
          <Button
            style={{ marginLeft: spacing[0] }}
            disabled={!pageInfo.hasNextPage}
          >
            {'>'}
          </Button>
        </ContentWrapper>
      </ContentWrapper>
      <CardViewWrapper>{children}</CardViewWrapper>
    </>
  );
}

export default CardViewList;

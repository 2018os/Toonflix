import React from 'react';
import styled from 'styled-components';

import { spacing } from '../../../util/theme';

const Thumbnail = styled.div`
  background-color: ${(props) => props.theme.Colors.WHILE};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: ${(props) => props.theme.ImgSizes.DEFAULT};
  height: ${(props) => props.theme.ImgSizes.DEFAULT};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
`;

const WebtoonInfoWrapper = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 236px;
  height: 124px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme.Colors.WHILE};
  text-align: center;
`;

const Title = styled.div`
  padding-top: 10px;
  font-size: ${(props) => props.theme.FontSizes.DEFAULT};
  font-weight: bold;
  line-height: 1.5;
  color: ${(props) => props.theme.TextColors.BLACK};
`;

const Writer = styled.div`
  margin-top: ${(props) => props.theme.spacing[0]};
  font-size: ${(props) => props.theme.FontSizes.SMALLEST};
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  color: ${(props) => props.theme.TextColors.GRAY};
`;

const Category = styled.div`
  width: fit-content;
  padding: 0 ${(props) => props.theme.spacing[0]};
  height: ${(props) => props.theme.spacing[3]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: ${(props) => props.theme.FontSizes.SMALL};
  margin-top: ${(props) => props.theme.spacing[2]};
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: ${(props) =>
    `0 2px ${props.theme.spacing[0]} 0 rgba(0, 0, 0, 0.2)`};
`;

const ImgWrapper = styled.div`
  position: relative;
  padding: ${(props) => props.theme.spacing[1]}
    ${(props) => props.theme.spacing[1]} 0;
`;

const AdultUsageImg = styled.img`
  width: ${(props) => props.theme.spacing[3]};
  height: ${(props) => props.theme.spacing[3]};
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: ${(props) => props.theme.spacing[3]};
  height: ${(props) => props.theme.spacing[3]};
  position: absolute;
  display: flex;
  flex-direction: column;
  right: ${(props) => props.theme.spacing[1]};
`;

export interface Props {
  title: string;
  writer: string;
  category: string;
  adultUsage: boolean;
  completion: boolean;
  paidService: boolean;
}

function CardView({
  title,
  writer,
  category,
  adultUsage,
  completion,
  paidService
}: Props) {
  return (
    <>
      <Thumbnail>
        <ImgWrapper>
          {adultUsage && (
            <AdultUsageImg
              style={{ position: 'absolute' }}
              src="/static/icon/adultUsage.svg"
            />
          )}
          <Wrapper>
            {(paidService || completion) && (
              <AdultUsageImg
                src={
                  completion
                    ? '/static/icon/completion.svg'
                    : '/static/icon/paidService.png'
                }
                srcSet={
                  !completion
                    ? `/static/icon/paidService@2x.png 2x,
                /static/icon/paidService@3x.png 3x`
                    : ''
                }
              />
            )}
            {completion && paidService && (
              <AdultUsageImg
                style={{ marginTop: spacing[0] }}
                src={'/static/icon/paidService.png'}
                srcSet={`/static/icon/paidService@2x.png 2x,
                /static/icon/paidService@3x.png 3x`}
              />
            )}
          </Wrapper>
        </ImgWrapper>
      </Thumbnail>
      <WebtoonInfoWrapper>
        <Title>{title}</Title>
        <Writer>{writer}</Writer>
        <Category># {category}</Category>
      </WebtoonInfoWrapper>
    </>
  );
}

export default CardView;

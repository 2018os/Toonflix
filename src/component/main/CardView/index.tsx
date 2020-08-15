import React from 'react';
import styled from 'styled-components';
import {
  Colors,
  TextColors,
  FontSizes,
  ImgSizes,
  spacing
} from '../../../util/theme';

// TODO
const Thumbnail = styled.div`
  background-color: ${Colors.WHILE};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: ${ImgSizes.DEFAULT};
  height: ${ImgSizes.DEFAULT};
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
`;

const WebToonInfoWrapper = styled.div`
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 236px;
  height: 124px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  background-color: ${Colors.WHILE};
  text-align: center;
`;

const Title = styled.div`
  padding-top: 10px;
  font-size: ${FontSizes.DEFAULT};
  font-weight: bold;
  line-height: 1.33;
  color: ${TextColors.BLACK};
`;

const Writer = styled.div`
  margin-top: 4px;
  font-size: ${FontSizes.SMALLEST};
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  color: ${TextColors.GRAY};
`;

const Category = styled.div`
  width: fit-content;
  padding: 0 ${spacing[0]};
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-size: ${FontSizes.SMALL};
  margin-top: 17px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const ImgWrapper = styled.div`
  position: relative;
  padding: 0 ${spacing[1]};
  padding-top: ${spacing[1]};
`;

const AdultUsageImg = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 8px;
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
      <WebToonInfoWrapper>
        <Title>{title}</Title>
        <Writer>{writer}</Writer>
        <Category># {category}</Category>
      </WebToonInfoWrapper>
    </>
  );
}

export default CardView;

import styled, { css } from 'styled-components';
import {
  Colors,
  TextColors,
  FontSizes,
  IconSizes,
  ImgSizes
} from '../util/theme';

interface Props {
  color?: Colors | TextColors;
  size?: FontSizes | IconSizes | ImgSizes;
  bold?: boolean;
}

const baseTypoCss = css`
  color: ${(props: Props) => props.color};
  font-size: ${(props: Props) => props.size};
  font-weight: ${(props: Props) => props.bold && 'bold'};
`;

const Title = styled.h1<Props>`
  ${baseTypoCss}
`;

const SubTitle = styled.h2<Props>`
  ${baseTypoCss}
`;

const Text = styled.span<Props>`
  ${baseTypoCss}
`;

const Paragraph = styled.p<Props>`
  ${baseTypoCss}
`;

Title.defaultProps = {
  color: TextColors.PRIMARY_COLOR,
  size: FontSizes.H1
};

SubTitle.defaultProps = {
  color: TextColors.BLACK,
  size: FontSizes.H2
};

Text.defaultProps = {
  color: TextColors.BLACK,
  size: FontSizes.DEFAULT
};

Paragraph.defaultProps = {
  color: TextColors.BLACK,
  size: FontSizes.DEFAULT
};

export { Title, SubTitle, Text, Paragraph };

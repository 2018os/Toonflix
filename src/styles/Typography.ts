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
// TODO: Enhance Props

const baseTypoCss = css`
  margin: 0;
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

export { Title, SubTitle, Text, Paragraph };

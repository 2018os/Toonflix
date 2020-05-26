import styled, { css } from 'styled-components';

const baseTypoCss = css`
  color: ${props => props.theme.textColors[props.color]};
  font-size: ${props => props.theme.fontSizes[props.size]};
  font-weight: ${props => props.bold && 'bold'};
`;

const Title = styled.h1`
  ${baseTypoCss}
`;

const SubTitle = styled.h2`
  ${baseTypoCss}
`;

const Text = styled.span`
  ${baseTypoCss}
`;

const Paragraph = styled.p`
  ${baseTypoCss}
`;

Title.defaultProps = {
  color: 'primaryColor',
  size: 'h1',
}

SubTitle.defaultProps = {
  color: 'black',
  size: 'h2',
}

Text.defaultProps = {
  color: 'black',
  size: 'default',
}

Paragraph.defaultProps = {
  color: 'black',
  size: 'default',
}

export {
  Title,
  SubTitle,
  Text,
  Paragraph,
};
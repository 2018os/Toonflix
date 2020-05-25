import styled from 'styled-components';

const Title = styled.h1`
	color: ${props => props.theme.textColors[props.color]};
	font-size: ${props => props.theme.fontSizes[props.size]};
`;

const SubTitle = styled.h2`
	color: ${props => props.theme.textColors[props.color]};
	font-size: ${props => props.theme.fontSizes[props.size]};
`;

const Text = styled.span`
	color: ${props => props.theme.textColors[props.color]};
	font-size: ${props => props.theme.fontSizes[props.size]};
`;

const Paragraph = styled.p`
	color: ${props => props.theme.textColors[props.color]};
	font-size: ${props => props.theme.fontSizes[props.size]};
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
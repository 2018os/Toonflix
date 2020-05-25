import styled from 'styled-components';

const Section = styled.div.attrs({
  className: 'section'
})`
  background-color: ${props => props.theme.colors[props.backgroundColor]};
`;

export default Section;
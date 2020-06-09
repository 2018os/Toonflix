import styled from 'styled-components';

const Icon = styled.img`
  ${props => `
    width: ${props.theme.iconSizes[props.size]};
    height: ${props.theme.iconSizes[props.size]};
  `}
`;

Icon.defaultProps = {
  size: 'default',
}

export default Icon;
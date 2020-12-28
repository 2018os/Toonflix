import styled from 'styled-components';

import { Colors, spacing } from '../util/theme';

interface Props {
  primary?: boolean;
  isFull?: boolean;
}

const Button = styled.button<Props>`
  cursor: pointer;
  width: ${(props) => props.isFull && `100%`};
  background-color: ${(props) =>
    props.primary ? Colors.PRIMARY_COLOR : Colors.WHITE};
  color: ${(props) => (props.primary ? Colors.WHITE : Colors.BLACK)};
  border: none;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export const MoreButton = styled(Button).attrs({
  isFull: true,
  primary: true
})`
  padding: ${spacing[1]};
  border-radius: 10px;
  height: 60px;
`;

export default Button;

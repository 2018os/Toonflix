import styled from 'styled-components';
import { Colors } from '../util/theme';

interface Props {
  primary?: boolean;
  isFull?: boolean;
}

const Button = styled.button<Props>`
  cursor: pointer;
  width: ${(props) => props.isFull && `100%`};
  background-color: ${(props) => props.primary && Colors.PRIMARY_COLOR};
  color: ${(props) => props.primary && Colors.WHITE};
  border: none;
`;

export default Button;

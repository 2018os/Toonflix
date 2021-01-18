import styled from 'styled-components';

import { spacing, FontSizes, Colors } from '../../../util/theme';

const Tag = styled.div.attrs({
  className: 'tag'
})`
  padding: 0 ${spacing[0]};
  height: 24px;
  display: inline-block;
  align-items: center;
  font-size: ${FontSizes.SMALL};
  background-color: ${Colors.WHITE};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export default Tag;

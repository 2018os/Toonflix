import styled from 'styled-components';

import { spacing, FontSizes, Colors } from '../../util/theme';

const Tag = styled.div`
  padding: 0 ${spacing[0]};
  height: ${spacing[3]};
  display: inline;
  align-items: center;
  margin-top: ${spacing[2]};
  margin-right: ${spacing[1]};
  font-size: ${FontSizes.SMALL};
  background-color: ${Colors.WHITE};
  border-radius: 5px;
  box-shadow: 0 2px ${spacing[0]} 0 rgba(0, 0, 0, 0.2);
`;

export default Tag;

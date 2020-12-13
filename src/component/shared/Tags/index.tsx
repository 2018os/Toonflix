import styled from 'styled-components';

import { spacing } from '../../../util/theme';

const Tags = styled.div`
  & > * {
    margin-right: ${spacing[0]};
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export default Tags;

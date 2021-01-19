import styled from 'styled-components';

import { spacing } from '../../../util/theme';

const Tags = styled.div`
  & > .tag {
    margin-right: ${spacing[0]};
    margin-bottom: ${spacing[0]};
  }
  & > .tag:last-child {
    margin-right: 0;
  }
`;

export default Tags;

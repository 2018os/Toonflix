import styled from 'styled-components';

import { ImgSizes, Colors } from '../../util/theme'

const LoadingCollectionCard = styled.div`
  width: ${ImgSizes.LARGE};
  height: ${ImgSizes.LARGE};
  border-radius: 10px;
  background-color: ${Colors.SKELETON_COLOR};
`;

export default LoadingCollectionCard;

import styled from 'styled-components';

const LoadingCollectionCard = styled.div`
  width: ${(props) => props.theme.ImgSizes.LARGE};
  height: ${(props) => props.theme.ImgSizes.LARGE};
  border-radius: 10px;
  background-color: ${(props) => props.theme.Colors.SKELETON_COLOR};
`;

export default LoadingCollectionCard;

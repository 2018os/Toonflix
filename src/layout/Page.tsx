import styled from 'styled-components';

const Page = styled.div`
  background-color: ${(props) => props.theme.Colors.GRAY};
  padding-top: ${(props) => props.theme.spacing[5]};
  padding-bottom: ${(props) => props.theme.spacing[6]};
`;

export default Page;

import styled from 'styled-components';

const Page = styled.div`
  background-color: ${props => props.theme.colors[props.backgroundColor]};
`;

export default Page;
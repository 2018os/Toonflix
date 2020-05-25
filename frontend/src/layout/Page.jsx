import styled from 'styled-components';

const Page = styled.div`
  background-color: ${props => props.theme.colors[props.backgroundColor]};

  & > .section {
    margin-bottom: ${props => props.theme.spacing[5]};
  }

  & > .section:last-child {
    margin-bottom: 0;
  }
`;

export default Page;
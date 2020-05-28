import styled, { css } from 'styled-components';

const baseLayoutCss = css`
  background-color: ${props => props.theme.colors[props.backgroundColor]};
`;

const Page = styled.div`
  ${baseLayoutCss}
`;

const Section = styled.div.attrs({
  className: 'section'
})`
  ${baseLayoutCss}
  margin-bottom: ${props => props.theme.spacing[6]};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Group = styled.div.attrs({
  className: 'group'
})`
  ${baseLayoutCss}
  margin-bottom: ${props => props.theme.spacing[5]};
  &:last-child {
    margin-bottom: 0;
  }
`;

export {
  Page,
  Section,
  Group
};
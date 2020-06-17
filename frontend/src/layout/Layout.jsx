import styled, { css } from 'styled-components';
import { pt, pb } from 'styled-components-spacing';

const baseLayoutCss = css`
  background-color: ${props => props.theme.colors[props.backgroundColor]};
`;

const Page = styled.div`
  ${baseLayoutCss}
  ${pt(5)};
  ${pb(6)};
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
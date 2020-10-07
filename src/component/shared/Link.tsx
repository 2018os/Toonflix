import BaseLink, { LinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

export interface Props {
  linkProps: LinkProps;
  children: React.ReactNode;
}

const Link: FunctionComponent<Props> = ({ linkProps, children }) => (
  <BaseLink {...linkProps}>
    <a target="_blank" style={{ textDecoration: 'none' }}>
      {children}
    </a>
  </BaseLink>
);

export default Link;

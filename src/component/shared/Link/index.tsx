import BaseLink, { LinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

export interface Props {
  linkProps: LinkProps;
  children: React.ReactNode;
}

const Link: FunctionComponent<Props> = ({ linkProps, children }) => (
  <BaseLink {...linkProps}>
    <a style={{ textDecoration: 'none', color: 'initial' }} className="link">
      {children}
    </a>
  </BaseLink>
);

export default Link;

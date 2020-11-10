import BaseLink, { LinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

export interface Props {
  linkProps: LinkProps;
  children: React.ReactNode;
  isNewTab?: boolean;
}

const Link: FunctionComponent<Props> = ({ linkProps, children, isNewTab }) => (
  <BaseLink {...linkProps}>
    <a
      target={isNewTab ? '_blank' : ''}
      style={{ textDecoration: 'none', color: 'initial' }}
    >
      {children}
    </a>
  </BaseLink>
);

export default Link;

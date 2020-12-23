import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { spacing, Colors } from '../../../util/theme';

type Props = {
  isOpen: boolean;
  openButton: React.ReactNode;
  children: React.ReactNode;
};

const OptionWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  display: ${(props) => !props.isOpen && `none`};
  min-width: 150px;
  border-radius: 10px;
  padding: ${spacing[1]} 0px;
  background-color: ${Colors.WHITE};
`;

export const Option = styled.div`
  padding: ${spacing[0]} ${spacing[1]};
  &:hover {
    background-color: ${Colors.GRAY};
  }
`;

const Dropdown: FunctionComponent<Props> = ({
  isOpen,
  openButton,
  children
}) => {
  return (
    <div>
      {openButton}
      <OptionWrapper isOpen={isOpen}>{children}</OptionWrapper>
    </div>
  );
};

export default Dropdown;

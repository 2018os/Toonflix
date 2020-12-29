import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { FontSizes, spacing } from '../../../util/theme';

export type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  handleChange: (value: string) => any;
  inputPrefix?: React.ReactNode;
  inputSize?: FontSizes;
};

const Input = styled.input<{ fontSize?: FontSizes }>`
  width: 100%;
  border: none;
  outline: none;
  background-color: inherit;
  padding: ${spacing[0]};
  font-size: ${(props) => props.fontSize};
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
`;

const SearchInput: FunctionComponent<SearchInputProps> = ({
  value,
  handleChange,
  inputPrefix,
  inputSize,
  ...rest
}) => {
  return (
    <Label>
      {inputPrefix}
      <Input
        fontSize={inputSize}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        {...rest}
      />
    </Label>
  );
};

export default SearchInput;

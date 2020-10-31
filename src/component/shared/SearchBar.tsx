import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import AutoComplete from './AutoComplete';

import {Colors, FontSizes, IconSizes, spacing, TextColors } from '../../util/theme'

type IconSize = 'SMALLER' | 'LARGER';

export interface Props {
  isMain?: boolean;
  handleChange?: (value: string) => any;
  autoComplete?: boolean;
}

const SearchBarWrapper = styled.div<{
  isMain?: boolean;
  autoCompleteOpen: boolean;
}>`
  position: relative;
  border-style: solid;
  background-color: ${Colors.WHITE};
    ${(props) => 
      props.isMain
        ? `
          border-color: ${Colors.PRIMARY_COLOR};
          border-width: 4px;
          border-radius: ${props.autoCompleteOpen ? '10px 10px 0 0' : '10px'};
      `
        : `
          border-color: ${Colors.GRAY};
          border-width: 1px;
          border-radius: ${props.autoCompleteOpen ? '5px 5px 0 0' : '5px'};
      `
    }
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SearchInputWrapper = styled.div`
  display: flex;
`;

const Icon = styled.img.attrs({
  src: '/static/icon/search.svg'
})<{ iconSize: IconSize }>`
  ${(props) => `
    width:${IconSizes[props.iconSize]};
    height:${IconSizes[props.iconSize]};
    margin: ${
      props.iconSize === 'SMALLER'
        ? `auto 0 auto ${spacing[1]}`
        : `auto 0 auto ${spacing[5]}`
    };
  `}
`;

const StyledInput = styled.input<{ isMain?: boolean }>`
  ${(props) => `
    width: 80%;
    border: none;
    outline: none;
    font-size: ${
      props.isMain ? FontSizes.H2 : FontSizes.SMALLEST
    };
    padding: ${props.isMain ? spacing[4] : spacing[1]};
    &::placeholder {
      color: ${props.isMain && TextColors.PRIMARY_COLOR};
    }
  `}
`;

const SearchBar: FunctionComponent<Props> = ({
  isMain,
  handleChange,
  autoComplete
}) => {
  const [value, setValue] = useState('');
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const iconSize = isMain ? 'LARGER' : 'SMALLER';
  return (
    <SearchBarWrapper isMain={isMain} autoCompleteOpen={autoCompleteOpen}>
      <SearchInputWrapper>
        <Icon iconSize={iconSize} />
        <StyledInput
          placeholder="컬렉션 장르, 키워드, 작가 등을 검색해보세요"
          isMain={isMain}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            handleChange && handleChange(e.target.value);
          }}
          onFocus={() => {
            setAutoCompleteOpen(true);
          }}
          onBlur={() => {
            setAutoCompleteOpen(false);
          }}
        />
      </SearchInputWrapper>
      {autoComplete && autoCompleteOpen && <AutoComplete keyword={value} />}
    </SearchBarWrapper>
  );
};

export default SearchBar;

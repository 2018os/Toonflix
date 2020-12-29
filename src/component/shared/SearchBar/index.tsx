import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import SearchInput from './Input';
import AutoComplete from '../AutoComplete';

import { Colors, FontSizes, spacing } from '../../../util/theme';

export interface Props {
  keyword: string;
  handleChange: (value: string) => any;
  inputSize: FontSizes;
  autoComplete?: boolean;
  noWrapper?: boolean;
  inputPrefix?: React.ReactNode;
  placeholder?: string;
}

export const SearchIcon = styled.img.attrs({
  className: 'search-icon',
  src: '/static/icon/search.svg'
})`
  padding: ${spacing[0]};
`;

const SearchBarWrapper = styled.div.attrs({
  className: 'search-wrapper'
})<{
  autoCompleteOpen: boolean;
}>`
  position: relative;
  border-style: solid;
  background-color: ${Colors.WHITE};
  border-color: ${Colors.GRAY};
  border-width: 1px;
  border-radius: ${(props) => (props.autoCompleteOpen ? '5px 5px 0 0' : '5px')};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const SearchBar: FunctionComponent<Props> = ({
  keyword,
  handleChange,
  autoComplete,
  noWrapper,
  inputPrefix,
  inputSize,
  placeholder
}) => {
  const router = useRouter();
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const Input = (
    <SearchInput
      placeholder={
        placeholder || '컬렉션, 장르, 키워드, 작가 등을 검색해보세요'
      }
      className="search-input"
      value={keyword}
      handleChange={handleChange}
      inputPrefix={inputPrefix}
      inputSize={inputSize}
      onFocus={() => {
        if (autoComplete) setAutoCompleteOpen(true);
      }}
      onBlur={() => {
        if (autoComplete) setAutoCompleteOpen(false);
      }}
    />
  );

  return noWrapper ? (
    <>
      {Input}
      {autoComplete && autoCompleteOpen && <AutoComplete keyword={keyword} />}
    </>
  ) : (
    <SearchBarWrapper autoCompleteOpen={autoCompleteOpen}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push({
            pathname: '/category',
            query: {
              keyword
            }
          });
        }}
      >
        {Input}
        {autoComplete && autoCompleteOpen && <AutoComplete keyword={keyword} />}
      </form>
    </SearchBarWrapper>
  );
};

export default SearchBar;

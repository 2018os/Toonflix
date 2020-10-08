import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type IconSize = 'SMALLER' | 'LARGER';

export interface Props {
  isMain: boolean;
}

const SearchBarWrapper = styled.div<{ isMain: boolean }>`
  display: flex;
  width: 100%;
  border-style: solid;
  ${(props) => `
    border-color: ${props.theme.Colors.PRIMARY_COLOR};
    border-width: ${props.isMain ? '4px' : '1px'};
    background-color: ${props.theme.Colors.WHITE};
    border-radius: ${props.isMain ? '10px' : '5px'};
  `}
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
};
`;

const Icon = styled.img.attrs({
  src: '/static/icon/search.svg'
})<{ iconSize: IconSize }>`
  ${(props) => `
    width:${props.theme.IconSizes[props.iconSize]};
    height:${props.theme.IconSizes[props.iconSize]};
    margin: ${
      props.iconSize === 'SMALLER'
        ? `auto 0 auto ${props.theme.spacing[1]}`
        : `auto 0 auto ${props.theme.spacing[5]}`
    };
  `}
`;

const StyledInput = styled.input<{ isMain: boolean }>`
  ${(props) => `
    width: 80%;
    border: none;
    outline: none;
    font-size: ${
      props.isMain ? props.theme.FontSizes.H2 : props.theme.FontSizes.SMALLEST
    };
    padding: ${props.isMain ? props.theme.spacing[4] : props.theme.spacing[1]};
    &::placeholder {
      color: ${props.isMain && props.theme.TextColors.PRIMARY_COLOR};
    }
  `}
`;

const SearchBar: FunctionComponent<Props> = ({ isMain }) => {
  const iconSize = isMain ? 'LARGER' : 'SMALLER';
  return (
    <SearchBarWrapper isMain={isMain}>
      <Icon iconSize={iconSize} />
      <StyledInput
        placeholder="컬렉션 장르, 키워드, 작가 등을 검색해보세요"
        isMain={isMain}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;

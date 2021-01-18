import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Logo from '../../styles/Logo';
import { Text } from '../../styles/Typography';

import Profile from './Profile';

import Link from '../../component/shared/Link';
import SearchBar, { SearchIcon } from '../../component/shared/SearchBar';

import { spacing, Colors, FontSizes, IconSizes } from '../../util/theme';

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacing[3]} ${spacing[5]};
`;

const ItemWrapper = styled.div`
  display: flex;
  width: 992px;
`;

const Item = styled.div`
  margin: auto ${spacing[2]} auto ${spacing[0]};
  &:last-child {
    margin: 0;
  }
`;

const Tab = styled(Text)<{ isCurrentPath: boolean }>`
  color: ${(props) =>
    props.isCurrentPath ? Colors.PRIMARY_COLOR : Colors.BLACK};
`;

const SearchBarWrapper = styled.div`
  min-width: 500px;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: ${IconSizes.DEFAULT};
  height: ${IconSizes.DEFAULT};
`;

const StyledLogo = styled(Logo)`
  width: 140px;
  vertical-align: middle;
`;

const Navigation = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const { pathname } = router;

  return pathname === '/' ? (
    <Profile isMain />
  ) : (
    <NavigationWrapper>
      <Link linkProps={{ href: '/' }}>
        <StyledLogo />
      </Link>
      <ItemWrapper>
        <Item>
          <Link linkProps={{ href: '/collections' }}>
            <Tab isCurrentPath={pathname === '/collections'}>컬렉션</Tab>
          </Link>
        </Item>
        <Item>
          <Link linkProps={{ href: '/category' }}>
            <Tab isCurrentPath={pathname === '/category'}>카테고리</Tab>
          </Link>
        </Item>
        <Item>
          <SearchBarWrapper>
            <SearchBar
              keyword={keyword}
              handleChange={(value) => setKeyword(value)}
              inputSize={FontSizes.SMALL}
              autoComplete
              inputPrefix={<StyledSearchIcon />}
            />
          </SearchBarWrapper>
        </Item>
      </ItemWrapper>
      <Profile />
    </NavigationWrapper>
  );
};

export default Navigation;

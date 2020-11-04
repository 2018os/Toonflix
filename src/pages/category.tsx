import React, { FunctionComponent } from 'react';

import withFilter from '../hocs/withFilter';
import withFooter from '../hocs/withFooter';
import withNavigation from '../hocs/withNavigation';

import Container from '../layout/Container';
import { FilterType } from '../layout/Filter';
import Page from '../layout/Page';

import CategoryContainer from '../component/category/index';

interface Props {
  filter: FilterType;
}

const Category: FunctionComponent<Props> = ({ filter }) => {
  return (
    <Page>
      <Container>
        <CategoryContainer filter={filter} />
      </Container>
    </Page>
  );
};

export default withNavigation(withFilter(withFooter(Category)));

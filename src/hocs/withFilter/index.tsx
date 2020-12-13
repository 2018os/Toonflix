import React, { useState } from 'react';

import Filter, { FilterType } from '../../layout/Filter';

const withFilter = (WrappedComponents: React.ComponentType<any | string>) => {
  return (props: any) => {
    const initialState: FilterType = {
      genres: [],
      platforms: []
    };

    const [filter, setFilter] = useState(initialState);
    return (
      <>
        <Filter filter={filter} setFilter={setFilter} />
        <WrappedComponents {...props} filter={filter} />
      </>
    );
  };
};

export default withFilter;

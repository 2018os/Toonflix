import React from 'react';

import { Title } from '../../styles/Typography';
import RandomCardList from './RandomCardList';

const RandomContainer = () => {
  return (
    <>
      <Title>썸네일만 보고 골라요~</Title>
      <div>Description</div>
      <RandomCardList />
    </>
  );
};

export default RandomContainer;

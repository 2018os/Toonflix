import React from 'react';
import styled from 'styled-components';

import { Title } from '../../styles/Typography';
import RandomCardList from './RandomCardList';

const Head = styled.div`
  text-align: center;
`;

const RandomContainer = () => {
  return (
    <>
      <Head>
        <Title>썸네일만 보고 골라요~</Title>
        <div>Description</div>
      </Head>
      <RandomCardList />
    </>
  );
};

export default RandomContainer;

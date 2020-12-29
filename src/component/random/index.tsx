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
        <div>마음에 드는 그림체를 가진 만화를 찾아 볼 수 있어요</div>
      </Head>
      <RandomCardList />
    </>
  );
};

export default RandomContainer;

import React from 'react';

// components
import Slider from './Slider';
import ThemeCard from './ThemeCard';

// 1. Search themes including webtoon
// 2. Get collection name & webtoons

const dummy = {
  title: '킬링 타임 top 3'
};

const ThemeList = () => (
  <ThemeCard theme={dummy} />
);

export default ThemeList;
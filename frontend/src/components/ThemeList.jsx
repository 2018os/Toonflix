import React from 'react';

// components
import Slider from './Slider';
import ThemeCard from './ThemeCard';

const ThemeList = ({ data: themes }) => (
  themes && (
    <Slider title="비슷한 작품" slidesToShow={3}>
      {
        themes.map(theme => (
          <ThemeCard theme={theme} key={`theme-card-${theme.id}`} />
        ))
      }
    </Slider>
  )
);

export default ThemeList;
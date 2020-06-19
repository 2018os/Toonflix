import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

// styles
import { Text } from 'styles/Typography';

// components
import Thumbnail from './Thumbnail';

const ThemeThumbnail = styled.div.attrs({
  className: 'theme-thumbnail',
})`
  display: flex;
  flex-wrap: wrap;
`;
const ThemeThumbnailWrapper = styled.div`
  width: ${props => props.theme.imgSizes.large};
  height: ${props => props.theme.imgSizes.large};
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  align-items: center;
  text-align: center;
  &:hover {
    & > .theme-thumbnail {
      opacity: 0.3;
    }
    & > .collection-title {
      display: inline;
    }
  }
`;

const ThemeTitle = styled(Text).attrs({
  className: 'collection-title'
})`
  z-index: 1;
  display: none;
  position: absolute;
  left: 0;
  right: 0;
`;

const ThemeCard = ({ theme }) => {
  const {
    id,
    title,
    webtoons,
  } = theme;
  const slicedWebtoons = webtoons.slice(0, 4);
  return (
    <Link to={`/theme/${id}`}>
      <ThemeThumbnailWrapper>
        <ThemeTitle size="large" bold>
          {title}
        </ThemeTitle>
        <ThemeThumbnail>
          {
            slicedWebtoons.map(webtoon => (
              <Thumbnail key={`thumbnail-${webtoon.id}`} src={webtoon.thumbnail} size={160} />
            ))
          }
        </ThemeThumbnail>
      </ThemeThumbnailWrapper>
    </Link>
  );
};

ThemeCard.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeCard;
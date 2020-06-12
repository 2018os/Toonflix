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
  width: 320px;
  height: 320px;
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
    title,
  } = theme;

  return (
    <Link to={`/theme/detail`}>
      <ThemeThumbnailWrapper>
        <ThemeTitle size="large" bold>
          {title}
        </ThemeTitle>
        <ThemeThumbnail>
          <Thumbnail src="https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg" width={160} height={160} />
          <Thumbnail src="https://image-comic.pstatic.net/webtoon/651664/thumbnail/title_thumbnail_20150326153630_t220x202.jpg" width={160} height={160} />
          <Thumbnail src="https://image-comic.pstatic.net/webtoon/26216/thumbnail/thumbnail_IMAG19_migrated_26216.jpg" width={160} height={160} />
          <Thumbnail src="https://image-comic.pstatic.net/webtoon/400738/thumbnail/thumbnail_IMAG19_migrated_400738.jpg" width={160} height={160} />
        </ThemeThumbnail>
      </ThemeThumbnailWrapper>
    </Link>
  );
};

ThemeCard.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default ThemeCard;
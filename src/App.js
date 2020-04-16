import React from 'react';

const dummy = {
  title: '유미의 세포들',
  author: '이동건',
  genre: 'episode',
  isFinish: false, 
  isAdult: false,
  thumb: 'https://shared-comic.pstatic.net/thumb/webtoon/651673/thumbnail/thumbnail_IMAG10_659b9446-0940-494a-bb5f-5893290a84d0.jpg',
};

const Webtoon = ({ data }) => {
  const {
    title,
    author,
    genre,
    isFinish,
    isAdult,
    thumb,
  } = data;
  return (
    <div>
      <div>
        <img src={thumb} />
      </div>
      <div>
        <h1>{title} - {author}</h1>
        <h2>{genre}</h2>
        {
          isFinish
          ? '완결'
          : '연재중'
        }
        {
          isAdult
          ? '19'
          : ''
        }
      </div>
    </div>
  );
}
const App = () => {
  return (
    <div className="App">
      <Webtoon data={dummy} />
    </div>
  );
  };

export default App;

const express = require('express');

const router = express.Router();

const dummyData = [
  {
    title: '신의 탑',
    authors: ['SIU'],
    method: 'story',
    genres: ['fantasy'],
    isFinish: false,
    isAdult: false,
    isFree: true,
    thumb: 'https://shared-comic.pstatic.net/thumb/webtoon/183559/thumbnail/thumbnail_IMAG10_5e13c29c-f451-4430-a84a-a46495fb8cc3.jpg',
  },
  {
    title: '어빌리티',
    authors: ['손제호', '이광수'],
    method: 'story',
    genre: ['fantasy'],
    isFinish: true,
    isAdult: false,
    isFree: true,
    thumb: 'https://shared-comic.pstatic.net/thumb/webtoon/511447/thumbnail/title_thumbnail_20121017183412_t83x90.jpg',
  },
];

router.get('/', (req, res, next) => { // Read
  console.log('cb1');
  next();
}, (req, res) => {
  console.log('cb2');
  res.render('list', { webtoons: dummyData });
});

router.get('/:id', (req, res) => { // Read - detail
  res.send('show one webtoon');
});

router.post('/', (req, res) => { // Create
  res.send('add webtoon');
});

router.put('/:id', (req, res) => { // Update
  res.send('update webtoon');
});

router.delete('/:id', (req, res) => { // Delete
  res.send('delete webtoon');
});

module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { // Read
  res.send('show all webtoons');
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
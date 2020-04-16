const express = require('express');
const app = express();

app.get('/webtoons', (req, res) => { // Read
  res.send('show all webtoons');
});

app.get('/webtoons/:id', (req, res) => { // Read - detail
  res.send('show one webtoon');
});

app.post('/webtoons', (req, res) => { // Create
  res.send('add webtoon');
});

app.put('/webtoons/:id', (req, res) => { // Update
  res.send('update webtoon');
});

app.delete('/webtoons/:id', (req, res) => { // Delete
  res.send('delete webtoon');
});

app.listen(8000, () => console.log('listening 8000'));
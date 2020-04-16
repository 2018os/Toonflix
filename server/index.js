const express = require('express');
const app = express();
const webtoonRouter = require('./routes/webtoons');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/webtoons', webtoonRouter);

app.listen(8000, () => console.log('listening 8000'));

module.exports = app;
let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.use((req, res, next) => {
  res.status(400).render('400', { error: '400 - Bad Request' });
});

app.use((req, res, next) => {
  res.status(404).render('404', { error: '404 - Not Found' });
});

app.listen(port);
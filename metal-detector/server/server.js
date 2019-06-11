const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const albumController = require('./controllers/albumController')

const PORT = 3000;

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }), cookieParser());

app.get('/', albumController.getAlbums, (req, res) => res.send())

app.listen(PORT, () => console.log('listening right hurrr on PORT 3000'))

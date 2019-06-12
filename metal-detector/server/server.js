const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios')
const dbController = require('./controllers/dbController')
const albumController = require('./controllers/albumController')


const PORT = 3000;

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }), cookieParser());

//app.get('/', albumController.getAlbums, (req, res) => res.send(res.locals.albumData))

app.post('/albums', albumController.getAlbums, dbController.insertAlbum, (req, res) => res.send('this is working'))

app.post('/', dbController.insertUser, (req, res) => res.send('sending'))

//app.post('/createUser', (req, res) => console.log(req.body))

app.listen(PORT, () => console.log('listening right hurrr on PORT 3000'))

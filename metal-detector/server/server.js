const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios')
const dbController = require('./controllers/dbController')
const albumController = require('./controllers/albumController')


const PORT = 8080;

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }), cookieParser());

//app.get('/', albumController.getAlbums, (req, res) => res.send(res.locals.albumData))

app.post('/albums', albumController.getAlbums, dbController.insertAlbum, (req, res) => res.send('this is working'))

app.post('/', dbController.insertUser, (req, res) => res.send(res.locals.created))

app.listen(PORT, () => console.log('listening right hurrr on PORT 3000'))

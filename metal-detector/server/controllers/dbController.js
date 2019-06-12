const createDB = require('../models/dbModel')

module.exports = {

  insertUser: (req, res, next) => {
    const pool = createDB();
    const insertUserQuery = 'INSERT INTO users_table (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)';
    const usersArray = [req.body.first_name, req.body.last_name, req.body.username, req.body.password]
    pool.query(insertUserQuery, usersArray, (err, result) => {
      if (err) {
        console.log('err is', err);
        res.sendStatus(404);
      } else {
        res.locals.created = true;
        return next();
      }
    })
  },
  insertAlbum: (req, res, next) => {
    const pool = createDB();
    const insertAlbumQuery = 'INSERT INTO albums_table (album_artwork, artist_name, album_name, release_date) VALUES ($1, $2, $3, $4)';
    const albumsArray = res.locals.albumData.map((el) => {
      console.log('el is ', el)
      console.log('the values are', Object.values(el))
      return Object.values(el)
    })
    // [res.locals.albumData.album_artwork, res.locals.albumData.artist_name, res.locals.albumData.album_name, res.locals.albumData.release_date]

    console.log('albumsArray is ', albumsArray)

    albumsArray.forEach((album) => {
      pool.query(insertAlbumQuery, album, (err, result) => {
        if (err) {
          console.log('what is the error')
          res.sendStatus(404)
        } else {
          console.log('successfully inserted albums into database')
          return next();
        }
      })

    })

  }


}

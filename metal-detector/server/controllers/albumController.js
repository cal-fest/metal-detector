const axios = require('axios')
const createDB = require('../models/dbModel')

module.exports = { 
  getAlbums: (req, res, next) => {

  axios.get("https://api.spotify.com/v1/albums", {
    headers: {
      'Authorization': 'Bearer BQBfcYJTM-O3cC4o4r5ohFTUx6Qd8Q-ySVjDk9I_fgvCKnunoiJd_vcsKRW31YINf7vUeRMJj4-tSwSibKQ',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      ids: '5IfUUKQ5lOfWlLOPJyxL2r,3HkxiSSIxRaT5HaIFR9NDN,7ckjkkVbGQXYuEdfErmRfC,6OmUwiZBss5csDAD3IAhdD,0SZg95nceCBL5G2THZihSA,49jPlzh1ctzrab4wQAJ4Jz,0gNBSnkiibRqyFzCJJ5fka,1zu0hVMxzCynLQg4wOIjAr,1Ya3cdZqOaAq9z6A7Opynn,744fJG2zZzS38VmeH8y6SV,02ruMAFomHbsWqPKnM7tj8,0ivjIcmCCFhtVOwKlNFzLC,0svoIboyRzqgRpvBDbJtUE,3UWCxgDWzIiKL9a1aRSOLN,3jsUccThnafgtLme5SZoD0,5lA39QwGv0zgi1oYjG2hXK,3ffdUrEvCQJX6mn2ZTq93m,3IAW2HAqOp7tKXelk3UAnH,6kBL1aDG9vrc4pFhgcqMSJ,2UrfoKnM0Wu6MSH0tx79ux'
    }
  })
    .then((myData) => {
      res.locals.albumData = myData.data.albums.map((el) => ({
        album_artwork: el.images[0].url,
        artist_name: el.artists[0].name,
        album_name: el.name,
        release_date: el.release_date
      }))
      return next();
    })
    .catch((err) => {
      console.log('there is an error')
    })
  }, 
  getAlbumArt: (req, res, next) => {
    console.log('inside of getAlbumArt');
    const pool = createDB();
    const getAlbumArtQuery = 'SELECT * FROM albums_table';
    const getAlbumArtArray = [req.body.album_artwork, req.body.artist_name, req.body.album_name, req.body.release_date];
    pool.query(getAlbumArtQuery, getAlbumArtArray, (err, result) => {
      if(err){
        console.log('there is an error at getAlbumArt in albumController', err)
      } else{
        console.log('successfully retrieving albumart from DB');
        res.locals.albumArt = true;
        return next();
      }
    })
  }
}



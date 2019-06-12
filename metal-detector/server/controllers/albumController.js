const axios = require('axios')
module.exports = { getAlbums: (req, res, next) => {
  //api fetch request here 
  //console.log the response for seeing in command line or res.send it to see in postman
  
  axios.get("https://api.spotify.com/v1/albums", {
    headers: {
      'Authorization': 'Bearer BQDWxRiNYk94WmMADXK0nzecLvoeRrPZYmcOguG0oXnuQdb5KieCZaPuOu5D3tjfXyfowtpiXnWtWT3dLi0',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    params: {
      ids: '4JECM4NZhtpjDX4JbYkh00,5NGFaarv4KxVYH9LvaMLso,2YRQAB7xwiQOITZxPTtEJ4,3seMsCJKEsXwzX3LdZCq8W,2l1FXDBga9lzRLL2pcoUfF,4sFl8rKwGv46YI64fwGVKp,7HeOApPwPNQit4zyEPPlUX,7mKKb28AyyEkEqqKxsgZN7,62P7Dy1U56YzWR8DUPLlEp,2pQXNhYA1Fhu5pZsMYmdEw,5x6diJ9b9RVnFlG0B4Hege,0d16ZSrhLxXqJUF8ZIOkzr,0Y0ePzJHJBkqbepJUqGHA3,0949gSxHofxIpOQULQfKR4,7weVNJpOYNUITCk7gIgA6R,24gRsXvlxHcVrYLO4IXmDa,3NRgb4H8l4f3Nq7MLBXaQj,7CbYOYN29usgRiHKWXLDS8,2nr1TUKAZTk7bG5eGOAKvR,0S31HiObTrGrk0AHHvUMa0'
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
  } 
}



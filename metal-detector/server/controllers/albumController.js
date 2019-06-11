module.exports = { getAlbums: (req, res, next) => {
  //api fetch request here 
  //console.log the response for seeing in command line or res.send it to see in postman

  console.log('inside of controller');
  return next();
  } 
}
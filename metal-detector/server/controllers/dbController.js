const createDB = require ('../models/dbModel')

module.exports = {

  initializeDatabase: (req, res, next) => {
    const pool = createDB();
    const query = `CREATE TABLE IF NOT EXISTS users_table (
      user_id SERIAL PRIMARY KEY,
      "firstName" text,
      "lastName" text,
      "userName" text,
      password character varying,
      favorites bytea
    ) `;
    `CREATE TABLE albums_table (
      id SERIAL PRIMARY KEY,
      album_artwork bytea,
      artist_name text,
      album_name text,
      release_date character varying
  )`;
  `CREATE TABLE favorites_tables (
    user_id integer REFERENCES users_table(user_id),
    item_id integer REFERENCES albums_table(id)
);`
    pool.query(query, (err, result) => {
      if(err) {
        console.log('err is', err);
        res.sendStatus(404);
      } else {
        console.log('connected successfully to Database')
        return next();
      }
    })
  },


  

}

// pool.query(query) 
//   .then(res => {
//     console.log('db has been created')
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   return next()
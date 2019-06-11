const { Pool } = require('pg');
const { myURI } = require('./config')
const pool = new Pool({
  connectionString: myURI,
})

const createDB = (req, res) => {
  const query = `CREATE TABLE IF NOT EXISTS users_table (
    user_id SERIAL PRIMARY KEY,
    "firstName" text,
    "lastName" text,
    "userName" text,
    password character varying,
    favorites bytea
)`;
pool.query(query) 
  .then(res => {
    console.log('db has been created')
  })
  .catch(err => {
    console.log(err);
    return next(err)
  })

}

const URI = process.env.PG_URI || myURI;

module.exports = { pool, createDB };

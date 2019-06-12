const { Pool } = require('pg');
const { myURI } = require('../config')

const createDB = (req, res) => {
  return new Pool({
    connectionString: myURI,
    max: 5,
  })
}

module.exports = createDB;


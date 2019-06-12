const { Pool } = require('pg');
const { myURI } = require('../config')

const createDB = (req, res) => {
  return new Pool({
    connectionString: myURI,
    max: 4,
  })
}

module.exports = createDB;


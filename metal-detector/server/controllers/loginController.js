const createDB = require('../models/dbModel');

module.exports = {
  verifyUser: (req, res, next) => {
    const pool = createDB();
    const verifyUserQuery = 'SELECT username, password FROM users_table WHERE username=$1 AND password=$2';
    const verifyUserArray = [req.body.username, req.body.password];
    pool.query(verifyUserQuery, verifyUserArray, (err, result) => {
      if (err) {
        console.log('error in loginController', err)
      } else {
        console.log('RESULT', result)
        res.locals.verifyLogin = true;
        return next();
      }
    })
  }
}
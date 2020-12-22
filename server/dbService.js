const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'store',
  connectionLimit: 100,
});


// dbService.executeQuery("delete from produts where id = ?", 10)
module.exports.executeQuery = (queryString, params) => {
  return new Promise((resolve, reject) => {
    pool.query(queryString, params, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
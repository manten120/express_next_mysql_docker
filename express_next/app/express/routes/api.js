var express = require('express');
var router = express.Router();

const mysql = require('mysql2');
const mysqlSetting = {
  host     : 'mysql8',
  user     : 'root',
  password : process.env.MYSQL_ROOT_PASSWORD,
  database : 'NodeTest'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const connection = mysql.createConnection(mysqlSetting);
  connection.query('select * from test_table', function (error, results, fields) {
    if (error) throw error;
    res.send(results[0]);
  });
  connection.end();
});

module.exports = router;

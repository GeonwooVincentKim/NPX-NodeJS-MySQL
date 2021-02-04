var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let sql = `SELECT * FROM TB_USER`;
  
});

module.exports = router;

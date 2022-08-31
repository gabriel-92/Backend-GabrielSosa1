var express = require('express');
const { listOfProducts } = require('./products');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', products: listOfProducts });
});

module.exports = router;
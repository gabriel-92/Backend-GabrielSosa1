var express = require('express');
var router = express.Router();
let listOfProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg"


  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg"
  }
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', products: listOfProducts });
});

module.exports = router;
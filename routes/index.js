var express = require('express');
var router = express.Router();
let listOfProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'

  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'

  }
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', products: listOfProducts });
});

module.exports = router;
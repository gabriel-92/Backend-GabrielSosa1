const express = require('express');
const router = express.Router();

let listOfProducts = [
  {
    id: 1,
    name: 'Producto 1',
    price: 100,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 200,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 300,
    img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
  },
]

router.get('/showProducts', (req, res) => {
  res.render('listOfProducts', {
    title: "Show Products",
    products: listOfProducts
  });
}).get('/addProducts', (req, res) => {
  res.render('addProducts', {
    title: "Add Products",
    products: listOfProducts
  });
})
  .post('/addProducts', (req, res) => {
    const newProduct = {
      id: listOfProducts.length + 1,
      name: req.body.name,
      price: req.body.price,
      img: req.body.img,
      description: req.body.description
    }

    listOfProducts.push(newProduct);
    res.redirect('/products/addProducts');
  }).get('/detail/:id', (req, res) => {
    const { id } = req.params;
    const product = listOfProducts.find(product => product.id == id);
    res.render('detail', {
      title: "Detail" + " " + product.name,
      product
    });
  });

module.exports = router;
//exportar listOfProducts para que se pueda usar en el main.js
module.exports.listOfProducts = listOfProducts;
const express = require('express');
const router = express.Router();
const id = 3;
let listOfProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 100

  },
  {
    id: 2,
    name: 'Product 2',
    price: 200
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300
  }
];

router.get('/showProducts', (req, res) => {
  res.render('products', {
    products: listOfProducts
  });
});

router.get('/addProducts', (req, res) => {
  res.render('addProducts', {
  });
});

router.get('/detail/:id', (req, res) => {
  let id = req.params.id;
  let myProduct = listOfProducts.filter(p => p.id == id);
  if (myProduct.length == 0) {
    return res.send(`Product with id ${id} not found`);
  }
  res.send(myProduct)
})

router.post('/', (req, res) => {
  let data = req.body;
  data.id = id++;
  listOfProducts.push(data);
  res.redirect('/products/addProducts');
});


module.exports = router;
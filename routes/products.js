const express = require('express');
const router = express.Router();
let id = 3;
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


router.get('/showProducts', (req, res) => {
  res.render('listOfProducts', {
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
  res.render('detail', {
    product: myProduct[0]

  });


  res.send(myProduct)
})

router.post('/', (req, res) => {
  let data = req.body;
  data.id = listOfProducts.length + 1;;
  listOfProducts.push(data);
  res.redirect('/products/addProducts');
});


module.exports = router;
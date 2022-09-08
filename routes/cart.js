const express = require('express');
const router = express.Router();
const container = require('../container/Contenedor');
const product = require('../public/mockup/product.json');



// post crea un carrito  y devuelve el id del carrito 
router.post('/cart', async (req, res) => {
  const cart = await container.save(product);
  res.json(cart);
});

// delete borra un carrito 
router.delete('/cart/:id', async (req, res) => {
  const cart = await container.deleteById(req.params.id);
  res.json(cart);
});

// get devuelve todos los productos del carrito
router.get('/cart/:id', async (req, res) => {
  const cart = await container.getById(req.params.id);
  res.json(cart);
});

// post agrega un producto al carrito por id
router.post('/cart/:id/product', async (req, res) => {
  const cart = await container.getById(req.params.id);
  cart.push(req.body);
  const newCart = await container.save(cart);
  res.json(newCart);
});

// delete borra un producto del carrito por id
router.delete('/cart/:id/product/:idProduct', async (req, res) => {
  const cart = await container.getById(req.params.id);
  const newCart = cart.filter((product) => product.id != req.params.idProduct);
  const newCart2 = await container.save(newCart);
  res.json(newCart2);
});


module.exports = router;
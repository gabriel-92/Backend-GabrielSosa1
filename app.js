const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

module.exports = app;
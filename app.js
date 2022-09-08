const express = require('express');
const app = express();
const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
const cartRouter = require('./routes/cart');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/cart', cartRouter);
// app.use('/update', indexRouter)

//manejar errores 404 
app.use((req, res, next) => {
    res.status(404).render('error', {
        title: "Error",
        error: "404",
        message: "Page not found"
    });
});

//manejar errores 500
app.use((err, req, res, next) => {
    res.status(500).render('error', {
        title: "Error",
        error: "500",
        message: "Internal Server Error",
        staus: err.status,
        stack: err.stack

    });
});

//manejar errores 403
app.use((err, req, res, next) => {
    res.status(403).render('error', {
        title: "Error",
        error: "403",
        message: "Forbidden"
    });
});





module.exports = app;
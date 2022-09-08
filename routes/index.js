const express = require('express');
const router = express.Router();
const Contenedor = require('../container/Contenedor.js');
const data = require('../public/mockup/product.json');
const container = new Contenedor(data);

const auth = require('../routes/login');



// router.get('/:id?', (req, res) => {
//   let { id } = req.params
//   id = parseInt(id)
//   if (id) {
//     container.getById(id)
//       .then((obj) => { res.render('detail', obj ) }) 
//       .catch((err) => { res.send(err) })
//   } else {
//     container.getAll()
//       .then((data) => { res.render('index', { data }) })
//       .catch((err) => { res.send(err) })
//   }

// });


// const arrayProducts = Object.values( products );

router.get('/:id',  (req, res) => {
  const {id} = req.params;
  id = parseInt(id)
  if (id) {
    container.getById(id)
      .then((data )=> {
        res.render('index', {
          title: "Detail",
          products: data
        })
      })
  } else {
      container.getAll()
        .then((data) => {
          res.render('index', {
            title: "Home",
            products: data
          })
        })
  }
});

// router.get('/', (req, res) => {
//   container.getAll()
//     .then((data,obj) => {
//       res.render('index', {
//         title: "Home",
//         products: data
//       })
//       console.log(obj);
//     }) 
//     })
    //.get('/:id?', (req, res) => {
//   let { id } = req.params;
//   id = parseInt(id)
//   if (id) {
//     container.getById(id)
//       .then((data) => {
//         res.render('detail', {
//           title: "Detail Product",
//           product : data
//         })
//       console.log(data);
//       })
//   }
    // })
  // .get('/detail/:id', (req, res) => {
  //   let { id } = req.params;
  //   id = parseInt(id)
  //   if (id) {
  //     container.getById(id)
  //       .then((data) => {
  //         res.render('detail', {
  //           title: "Detail Product",
  //           product: data
  //         })
  //         console.log(data);
  //       })
   // }
    //   const { id } = req.params;
    //   const product = data.find(product => product.id == id);
    //   res.render('detail', {
    //     title: "Detail" + " " + product.title,
    //     product
    //   });
//     }).post('/addProducts', (req, res) => {
//   const newProduct = {
//     date: new Date().toString(),
//     id: data.length + 1,
//     title: req.body.name,
//     price: req.body.price,
//     image: req.body.img,
//     description: req.body.description,
//     stock: req.body.stock,
//       }
      
//   data.push(newProduct);
//   console.log(data )
//   res.redirect('/');
// }).get('/addProducts', (req, res) => {
//   res.render('addProducts', {
//     title: "Add Products",
//     products: data
//   });
// })

// router.get('/', (req, res, next) => {
//   container.getAll() 
  





//     .then((data) => {
//       res.render('index', { title: 'Express', products: data });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log("🚀 ~ file: index.js ~ line 47 ~ router.get ~ container.getAll( )", container.getAll( ))
// }).get('/detail/:id', (req, res) => {
//       const { id } = req.params;
//   const product = data.find(product => product.id == id);
//   console.log(data);
//       //si no encuentra el producto 
//       if (!data) {
//         res.render('error', {
//           title: "Error",
//           message: "Product not found"
//         });
//       } else {
//         res.render('detail', {
//           title: "Detail" + " " + product.title,
//           data
//         });
//       }
//     })
module.exports = router;
// module.exports.listOfProducts = listOfProducts; //  
//res.render('index', { title: 'Express', products: listOfProducts });
    // }).get('/addProducts', (req, res) => {
    //   res.render('addProducts', {
    //     title: "Add Products",
    //     products: listOfProducts
    //   });
    // })
    //   .post('/addProducts', auth, (req, res) => {//!authentication admin
    //   const newProduct = {
    //     date: new Date().toString(),
    //     id: listOfProducts.length + 1,
    //     name: req.body.name,
    //     price: req.body.price,
    //     img: req.body.img,
    //     description: req.body.description,
    //     stock: req.body.stock
    //   }
    //   listOfProducts.push(newProduct);
    //   console.log(listOfProducts);
    //   res.redirect('/addProducts');
    // }).get('/detail/:id', (req, res) => {
    //   const { id } = req.params;
    //   const product = listOfProducts.find(product => product.id == id);
    //   //si no encuentra el producto 
    //   if (!product) {
    //     res.render('error', {
    //       title: "Error",
    //       message: "Product not found"
    //     });
    //   } else {
    //     res.render('detail', {
    //       title: "Detail" + " " + product.name,
    //       product
    //     });
    //   }
    // }).put('/update/:id', auth, (req, res) => {//!authentication admin
    //   const { id } = req.params;
    //   const product = listOfProducts.find(product => product.id == id);
    //   //si no encuentra el producto 
    //   if (!product) {
    //     res.render('error', {
    //       title: "Error",
    //       message: "Product not found"
    //     });
    //   } else {
    //     res.render('update', {
    //       title: "Update" + " " + product.name,
    //       product
    //     });
    //   }
    // }).delete('/detail/:id', (req, res) => {
    //   const { id } = req.params;
    //   const product = listOfProducts.find(product => product.id == id);
    //   //si no encuentra el producto
    //   if (!product) {
    //     res.render('error', {
    //       title: "Error",
    //       message: "Product not found"
    //     });
    //   } else {
    //     listOfProducts = listOfProducts.filter(product => product.id != id);
    //     res.redirect('/addProducts');
    //   }
    // });

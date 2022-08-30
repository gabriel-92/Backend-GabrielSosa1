// class Contenedor {

//     constructor(route) {
//         this.route = route
//         this.productos = [];
//     }
//     getAll() {
//         return this.productos;
//     }
//     getById(id) {
//         console.log(Number(id));
//         let obj = this.productos;
//         let myProduct = obj.filter(product => product.id === Number(id));
//         return myProduct;
//     }

//     addOne(obj) {
//         obj.id = this.productId++;
//         this.productos = [...this.productos, obj];
//     }
//     updateById(id, obj) {
//         this.productos = this.productos.forEach(product => {
//             if (product.id === Number(id)) {
//                 product = obj;
//             }
//             return this.productos;
//         }
//         );
//         console.log(obj)

//     }
//     //eliminar un producto por id
//     deleteById(id) {
//         let obj = this.productos.filter(product => product.id !== Number(id));
//         this.productos = obj;
//         return this.productos;
//     }

// }
// const products = new Contenedor('../container/Contenedor.js');
// // products.addOne({

// //     name: 'Producto 1',
// //     price: 100,
// //     img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
// //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
// // }
// // );
// // products.addOne({

// //     name: 'Producto 2',
// //     price: 200,
// //     img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
// //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
// // }
// // );
// // products.addOne({
// //     name: 'Producto 3',
// //     price: 300,
// //     img: "https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg",
// //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem. Quisquam, quidem, temporibus, nisi, facere, soluta, vero, deleniti, voluptate harum velit cumque dolores sint iure odio doloribus voluptatem.'
// // });


// module.exports = products;
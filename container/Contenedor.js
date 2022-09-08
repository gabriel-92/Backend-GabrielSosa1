const fs = require('fs');

module.exports = class Contenedor {
    constructor(file) {
        this.file = '.data' + file;
    }
    async getAll() {
        try {
            const data = await fs.promises.readFile(this.file, 'utf-8')
            if (data) {
                return JSON.parse(data);
            } else {
                return [];
            }
        } catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            }
            console.log(error);
        }
    }
    async getById(id) {
        try {
            const products = await this.getAll()
                .then(data => {
                    return data.filter(obj => obj.id === (id))
                })
            if (products.length > 0) {
                //devolver el producto filtrado por id 
                return products[0];
            } else {
                return { error: 'product not found' }
            }
        } catch (error) {
            console.log(error);
        }
    }
    //             const products = data?.find(product => product.id == id);
    //             console.log(data)
    //             return products;
    //         });
    //     console.log(products);
    //     if (!products) {
    //         return null;
    //     }
    //     return products;
    // } catch (error) {
    //     console.log(error);
    // }

    // async save(data) {
    //     try {
    //         const products = await this.getAll();
    //         const id = products.length + 1;
    //         const newProduct = { ...data, id };
    //         products.push(newProduct);
    //         await fs.promises.writeFile(this.file, JSON.stringify(products, null, 2));
    //         return id;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    // //         const product = products.find((product) => product.id == id);
    // //         return product;
    // //     } catch (error) {
    // //         console.log(error);
    // //     }
    // // }



    // async deleteById(id) {
    //     try {
    //         const products = await this.getAll();
    //         const newProducts = products.filter((product) => product.id != id);
    //         await fs.promises.writeFile(this.file, JSON.stringify(newProducts, null, 2));
    //         return newProducts;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async deleteAll() {
    //     try {
    //         await fs.promises.writeFile(this.file, JSON.stringify([], null, 2));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async updateById(id, product) {
    //     try {
    //         const products = await this.getAll();
    //         const newProducts = products.map((product) => {
    //             if (product.id == id) {
    //                 return { ...product, ...product };
    //             }
    //             return product;
    //         });
    //         await fs.promises.writeFile(this.file, JSON.stringify(newProducts, null, 2));
    //         return newProducts;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
};



////////////////////////////////////////////////////////////////////////////////////////
// const { promises: fs } = require('fs')
// class Contenedor {
//     constructor(file) {
//         this.file = '.data' + file;
//     }

//     async save(obj) {
//         let objs = await this.getAll();
//         if (objs.length == 0) {
//             Contenedor.newId = 1;
//         } else {
//             Contenedor.newId++;
//         }
//         obj = { id: Date.now(), ...obj }
//         let datos = [...objs, obj]
//         try {
//             await fs.writeFile(this.ruta, JSON.stringify(datos, null, 2))
//         } catch (error) {
//             throw new Error(`error cannot delete data ${error}`)
//         }

//     }
//     async getById(id) {
//         let objs = await this.getAll();
//         let obj = objs.filter(o => o.id == id);
//         if (obj.length == 0) {
//             return `Unable to get data with id: ${id}`
//         }
//         return obj
//     }
//     async getRandom() {
//         try {
//             let objs = await this.getAll();
//             let product = JSON.parse(objs);
//             let index = Math.floor(Math.random() * product.length);
//             return product[index];
//         } catch (error) {
//             return `Unable to get data`
//         }
//     }
//     async getAll() {
//         try {
//             let objs = await fs.readFile(this.ruta, 'utf8');
//             return objs;
//         } catch (error) {
//             return `Unable to get data`
//         }
//     }
//     async updateById(obj) {
//         let objs = await this.getAll();
//         let index = objs.findIndex(o => o.id == obj.id);
//         objs[index] = obj;
//         try {
//             await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
//         } catch (error) {
//             `Data cannot be modified`
//         }
//     }

//     async deleteById(id) {
//         let objs = await this.getAll();
//         let obj = objs.filter(o => o.id != id)
//         try {
//             await fs.writeFile(this.ruta, JSON.stringify(obj, null, 2))
//         } catch (error) {
//             return `Can't delete that record`
//         }
//     }
//     async deleteAll() {
//         try {
//             await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
//         } catch (error) {
//             return `Unable to delete data`
//         }
//     }
// }
// module.exports = Contenedor;
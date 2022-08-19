class Contenedor {
    productId = 0;

    constructor() {
        this.productos = [];
    }
    getAll() {
        return this.productos;
    }
    getById(id) {
        console.log(Number(id));
        let obj = this.productos;
        let myProduct = obj.filter(product => product.id === Number(id));
        return myProduct;
    }

    addOne(obj) {
        obj.id = this.productId++;
        this.productos = [...this.productos, obj];
    }
    updateById(id, obj) {
        this.productos = this.productos.forEach(product => {
            if (product.id === Number(id)) {
                product = obj;
            }
            return this.productos;
        }
        );


    }
    //eliminar un producto por id
    deleteById(id) {
        let obj = this.productos.filter(product => product.id !== Number(id));
        this.productos = obj;
        return this.productos;
    }

}
module.exports = Contenedor;
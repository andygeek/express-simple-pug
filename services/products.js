const productsMoks = require("../utils/mocks/products")


// Aqui no coloco nada de código http, ya que solo me importa logica de negocio

class ProductsService {
    constructor(){

    }

    getProducts({tags}){
        return Promise.resolve(productsMoks);
    }

    getProduct({productId}){
        return Promise.resolve(productsMoks[productId]);
    }

    createProduct({product}){
        return Promise.resolve(productsMoks[0]);
    }

    updateProduct({productId, product}){
        return Promise.resolve(productsMoks[0]);
    }

    deleteProduct({productId}){
        return Promise.resolve(productsMoks[0]);
    }
}

module.exports = ProductsService
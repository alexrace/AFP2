const productDAO = require('../dao/productDAO');

class productService{
    fetchProducts(queryOptions, callback){
        productDAO.read((products) => {
            if(queryOptions['product_id'] != undefined){
                callback(products.filter((product) => {
                    return product.product_id == queryOptions['product_id'];
                }));
            }else{
                callback(products);
            }
        });
    }

    createProduct(queryOptions, callback){

    }
}

module.exports = new productService();
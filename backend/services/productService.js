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
        if(queryOptions['product'] != undefined){
            productDAO.create(queryOptions['product'], (err) => {
                callback({status: 400, description: "Hiba a product létrehozása közben!"});
            }, () => {
                callback({status: 200, description: "Product sikeresen létrehozva!"});
            })
        }
    }
}

module.exports = new productService();
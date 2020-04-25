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

    createProduct(product, callback){
        if(product != undefined){
            productDAO.create(product, (err) => {
                callback({status: 400, description: `Hiba a product létrehozása közben: ${err}`});
            }, () => {
                callback({status: 200, description: "Product sikeresen létrehozva!"});
            })
        }else{
            callback({status: 400, description: "Hibás paraméterek!"});
        }
    }

    updateProduct(product, callback){
        if(product != undefined){
            productDAO.update(product, (err) => {
                callback({status: 400, description: `Hiba a product frissítése közben: ${err}`});
            }, () => {
                callback({status: 200, description: "Product sikeresen frissítve!"});
            });
        }else{
            callback({status: 400, description: "Hibás paraméterek!"});
        }
    }

    deleteProduct(product_id, callback){
        if(product_id != undefined){
            productDAO.delete(product_id, (err) => {
                if(err){
                    callback({status: 400, description: `Hiba a product törlése közben: ${err}`});
                }
            }, () => {
                    callback({status: 200, description: "Product sikeresen törölve!"});
            });
        }
    }

    storeProduct(product_id, qty, callback){
        if(product_id != undefined && qty != undefined){
            productDAO.store(product_id, qty, (err) => {
                if(err){
                    callback({status: 400, description: `Hiba a product raktározása közben: ${err}`});
                }
            }, () => {
                callback({status: 200, description: "Product sikeresen raktárba helyezve!"});
            })
        }
    }
}

module.exports = new productService();
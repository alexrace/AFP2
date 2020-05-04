import dispatcher from '../ProductDispatcher';

class ProductUpdateActions{
    
    update(product_id, product_name,product_price,product_qty){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_UPDATE',
            payload : {
                product_id : product_id,
                product_name : product_name,
                product_price : product_price,
                product_qty : product_qty
                
            }
        });
    }
}

export default new ProductUpdateActions();
import dispatcher from '../AppDispatcher';

class ProductUpdateActions{
    
    update(product_id, product_name,product_price,description){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_UPDATE',
            payload : {
                product_id : product_id,
                product_name : product_name,
                product_price : product_price,
                description : description
                
            }
        });
    }
}

export default new ProductUpdateActions();
import dispatcher from '../AppDispatcher';

class ProductSearchActions{
    
    search(product_id, product_name){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_SEARCH',
            payload : {
                product_id : product_id,
                product_name : product_name
                
            }
        });
    }
}

export default new ProductSearchActions();
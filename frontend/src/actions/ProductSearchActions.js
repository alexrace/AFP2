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
    sell(product_id, product_qty){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_SELL',
            payload : {
                product_id : product_id,
                qty : product_qty
                
            }
        });
    }
}

export default new ProductSearchActions();
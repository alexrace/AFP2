import dispatcher from '../ProductDispatcher';

class ProductDeleteActions{
    
    delete(product_id){
        dispatcher.handleViewAction({
            actionType : 'PRODUCT_DELETE',
            payload : {
                product_id : product_id
            }
        });
    }
}

export default new ProductDeleteActions();
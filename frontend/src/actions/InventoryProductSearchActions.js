import dispatcher from '../AppDispatcher';

class InventoryProductSearchActions{
    
    search(inventory_type, inventory_id){
        dispatcher.handleViewAction({
            actionType : 'INVENTORY_PRODUCT_SEARCH',
            payload : {
                inventory_type : inventory_type,
                inventory_id: inventory_id
            }
        });
    }
}

export default new InventoryProductSearchActions();
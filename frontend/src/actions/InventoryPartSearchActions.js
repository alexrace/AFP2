import dispatcher from '../AppDispatcher';

class InventoryPartSearchActions{
    
    search(inventory_type, inventory_id){
        dispatcher.handleViewAction({
            actionType : 'INVENTORY_PART_SEARCH',
            payload : {
                inventory_type : inventory_type,
                inventory_id: inventory_id
            }
        });
    }
}

export default new InventoryPartSearchActions();
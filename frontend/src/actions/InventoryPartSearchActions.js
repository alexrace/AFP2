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

    require(part_id, part_qty){
        dispatcher.handleViewAction({
            actionType: 'INVENTORY_PART_REQUIRE',
            payload: {
                part_id: part_id,
                part_qty: part_qty
            }
        });
    }
}

export default new InventoryPartSearchActions();
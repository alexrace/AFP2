import dispatcher from '../AppDispatcher';

class PartSearchActions{
    
    search(part_id, part_name){
        dispatcher.handleViewAction({
            actionType : 'PART_SEARCH',
            payload : {
                part_id : part_id,
                part_name : part_name
            }
        });
    }
    require(part_id, part_qty){
        dispatcher.handleViewAction({
            actionType : 'PART_REQUIRE',
            payload : {
                part_id : part_id,
                part_qty: part_qty
            }
        });
    }
}

export default new PartSearchActions();
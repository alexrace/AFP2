import dispatcher from '../PartDispatcher';

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
}

export default new PartSearchActions();
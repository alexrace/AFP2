import dispatcher from '../AppDispatcher';

class PartUpdateActions{
    
    update(part_id, part_name,part_price,description){
        dispatcher.handleViewAction({
            actionType : 'PART_UPDATE',
            payload : {
                part_id : part_id,
                part_name : part_name,
                part_price : part_price,
                description : description
                
            }
        });
    }
}

export default new PartUpdateActions();
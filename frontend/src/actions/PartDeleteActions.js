import dispatcher from '../AppDispatcher';

class PartDeleteActions{
    
    delete(part_id){
        dispatcher.handleViewAction({
            actionType : 'PART_DELETE',
            payload : {
                part_id : part_id
            }
        });
    }
}

export default new PartDeleteActions();
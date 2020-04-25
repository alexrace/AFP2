import { Dispatcher } from "flux";
import axios from 'axios';
import store from './stores/PartStore';

class PartDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            action : action
        });
    }
}

const dispatcher = new PartDispatcher();

dispatcher.register((payload)=>{
    if(payload.action.actionType !== 'PART_SEARCH'){
        return;   
    }
    if(payload.action.payload.part_id !== ''){
       console.log('ID keresés');
        axios.get('/parts').then((resp)=>{
            store._parts = resp.data.filter((part)=>{
                // eslint-disable-next-line 
                return part.part_id == payload.action.payload.part_id;
            });
            store.emitChange();
        })
    }
    else{
        console.log('Név keresés');
        axios.get('/parts').then((resp)=>{
            store._parts = resp.data.filter((part)=>{
                return part.part_name.includes(payload.action.payload.part_name)
            });
            store.emitChange();
        })
    }
});

export default dispatcher;
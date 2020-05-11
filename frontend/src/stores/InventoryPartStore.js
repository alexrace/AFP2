import Eventemitter from 'events'

class InventoryPartStore extends Eventemitter{

    _parts = [];

    emitChange(){
        this.emit('Change');
    }

    addChangeListener(callback){
        this.on('Change',callback);
    }
    removeChangeListener(callback){
        this.removeChangeListener('Change',callback);
    }
}

var inventoryPartStore = new InventoryPartStore();

export default inventoryPartStore;
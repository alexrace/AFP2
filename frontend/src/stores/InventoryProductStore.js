import Eventemitter from 'events'

class InventoryProductStore extends Eventemitter{

    _products = [];

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

var inventoryProductStore = new InventoryProductStore();

export default inventoryProductStore;
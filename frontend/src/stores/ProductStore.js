import Eventemitter from 'events'

class ProductStore extends Eventemitter{

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

var productStore = new ProductStore();

export default productStore;
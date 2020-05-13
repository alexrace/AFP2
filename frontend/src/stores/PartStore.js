import Eventemitter from 'events'

class PartStore extends Eventemitter{

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

var partStore = new PartStore();

export default partStore;
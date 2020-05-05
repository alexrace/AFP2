const inventoryDAO = require('../dao/inventoryDAO');

class inventoryService{
    fetchInventory(queryOptions, callback){
        if(queryOptions != undefined){
            inventoryDAO.read(queryOptions['inventory_type'], queryOptions['inventory_id'], (err) => {
                callback({status: 400, description: `Hiba az inventory lekérdezése közben: ${err}`});
            }, (inventory) => {
                callback({status: 200, description: 'Inventory sikeresen lekérdezve!', inventories: inventory});
            });
        }else{
            callback({status:400, description:'Hiányzó paraméterek!'});
        }
    }
}

module.exports = new inventoryService();
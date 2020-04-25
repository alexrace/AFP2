const inventoryService = require('../services/inventoryService');

exports.fetchOne = (req, res) => {
    inventoryService.fetchInventory({inventory_type: req.params.inventory_type, inventory_id: req.params.inventory_id}, (result) => {
        if(result.status == 200){
            res.status(200).json(result);
        }else{
            res.status(400).json(result);
        }
    });
}
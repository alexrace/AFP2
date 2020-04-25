const partDAO = require('../dao/partDAO');

class partService{
    fetchParts(queryOptions, callback){
        partDAO.read((parts) => {
            if(queryOptions['part_id'] != undefined){
                callback(parts.filter((part) => {
                    return part.part_id == queryOptions['part_id'];
                }));
            }else{
                callback(parts);
            }
        });
    }

    createPart(part, callback){
        if(part != undefined){
            partDAO.create(part, () => {
                callback({status: 200, description: 'Part sikeresen létrehozva!'});
            }, (err) => {
                callback({status: 400, description: `Hiba a part létrehozása közben: ${err}`});
            });
        }
    }

    updatePart(part, callback){
        if(part != undefined){
            partDAO.update(part, () => {
                callback({status: 200, description: 'Part sikeresen frissítve!'});
            }, (err) => {
                callback({status: 400, description: `Hiba a part frissítése közben: ${err}`});
            });
        }
    }

    deletePart(part_id, callback){
        if(part_id != undefined){
            partDAO.delete(part_id, () => {
                callback({status: 200, description: 'Part sikeresen törölve!'});
            }, (err) => {
                callback({status: 400, description: `Hiba a part törlése közben: ${err}`});
            });
        }
    }

    orderPart(part_id, part_qty, callback){
        partDAO.order(part_id, part_qty, () => {
            callback({status: 200, description: 'Part sikeresen megrendelve!'});
        }, (err) => {
            callback({status: 400, description: `Hiba a part rendelése közben: ${err}`});
        })
    }

    requirePart(part_id, part_qty, callback){
        partDAO.require(part_id, part_qty, () => {
            callback({status: 200, description: 'Part sikeresen kikérve a raktárból!'});
        }, (err) => {
            callback({status: 400, description: `Hiba a part rendelése közben: ${err}`});
        });
    }
}

module.exports = new partService();
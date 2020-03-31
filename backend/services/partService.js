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
}

module.exports = new partService();
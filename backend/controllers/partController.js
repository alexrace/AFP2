const partService = require('../services/partService');

exports.fetchAll = (req, res) => {
    partService.fetchParts({}, (parts) => {
       res.status(200).json(parts);
    });
}

exports.fetchOne = (req, res) => {
    partService.fetchParts({part_id: req.params['part_id']}, (part) => {
       res.status(200).json(part);
    });
}

exports.createPart = (req, res) => {
    partService.createPart(req.body, (result) => {
        if(result.status == 200){
            res.status(200).json(result);
        }else{
            res.status(400).json(result);
        }
    });
}

exports.updatePart = (req, res) => {
    partService.updatePart(req.body, (result) => {
       if(result.status == 200){
           res.status(200).json(result);
       }else{
           res.status(400).json(result);
       }
    });
}

exports.deletePart = (req, res) => {
    partService.deletePart(req.params['part_id'], (result) => {
        if(result.status == 200){
            res.status(200).json(result);
        }else{
            res.status(400).json(result);
        }
    });
}

exports.orderPart = (req, res) => {
    partService.orderPart(req.body.part_id, req.body.part_qty, (result) => {
       if(result.status == 200){
           res.status(200).json(result);
       } else{
           res.status(400).json(result);
       }
    });
}

exports.requirePart = (req, res) => {
    partService.requirePart(req.body.part_id, req.body.part_qty, (result) => {
        if(result.status == 200){
            res.status(200).json(result);
        } else{
            res.status(400).json(result);
        }
    });
}
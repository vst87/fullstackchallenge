const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var {Admin} = require('../models/admin'); 

// => localhost:3000/admin/
router.get('/', (req, res) => {
    Admin.find((err,adminData) => {
        if(!err){
            res.send(adminData);
        }else 
            console.log('Error in getting admin data:' + JSON.stringify (err, undefined, 2));
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Admin.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Admin :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var admin = new Admin({
        name: req.body.name,
        location: req.body.location,
        address: req.body.address
    });
    admin.save((err, doc) => {
        if(!err){
            res.send(doc);
        }else 
            console.log('Error Admin Save:' + JSON.stringify (err, undefined, 2));

    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var admin = {
        name: req.body.name,
        location: req.body.location,
        address: req.body.address
    };
    Admin.findByIdAndUpdate(req.params.id, { $set: admin }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Admin.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Admin Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
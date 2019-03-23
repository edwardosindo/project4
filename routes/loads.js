const express = require('express');
const router = express.Router();

const Loads = require('../models/Loads');

const loads = require('../controllers/load.controller.js');


    // create a new load
    router.post('/loads', loads.create);

    router.post('/loads/search', loads.search);

    //Retr.patch
    router.get('/loads', loads.findAll);

    //Retrieve a single Loads with loadId
    router.get('/loads/:loadId', loads.findOne);

    //Update a load with loadId
    router.put('/loads/:loadId', loads.update);

    //Delete a load with loadId
    router.delete('/loads/:loadId', loads.delete);
    
    //Search for loads
    router.get('/search', loads.search);

module.exports = router;


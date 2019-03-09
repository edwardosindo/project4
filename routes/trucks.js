const express = require('express');
const router = express.Router();

const Trucks = require('../models/Trucks');

const trucks = require('../controllers/truck.controller.js');


    // create a new truck
    router.post('/trucks', trucks.create);

    //Retrieve all trucks
    router.get('/trucks', trucks.findAll);

    //Retrieve a single Truck with truckId
    router.get('/trucks/:truckId', trucks.findOne);

    //Update a truck with truckId
    router.put('/trucks/:truckId', trucks.update);

    //Delete a truck with truckId
    router.delete('/trucks/:truckId', trucks.delete);


module.exports = router;


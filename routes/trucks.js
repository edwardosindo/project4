const express = require('express');
const router = express.Router();
const errors = require('express-errors');
const Trucks = require('../models/Trucks');


    //Get Trucks
    router.get('/trucks', async(req, res, next) => {
        try {
            const trucks = await Trucks.find({});
            res.send(trucks);
            next();
        } catch(err) {
            return next(new errors.InvalidContentError(err));
        } 
    });

    //Get Single Truck
    router.get('/trucks/:id', async(req, res, next) => {
        try {
            const truck = await Trucks.findById(req.params.id);
            res.send(truck);
            next();
        } catch(err) {
            return next(
                new errors.ResourceNotFoundError(
                    'There is no truck with the id of $ {req.params.id}'
                )
            );
        } 
    });

    // Add Trucks
    router.post('/trucks', async(req, res, next) => {
        //check for JSON
        if(!req.is('application/json')) {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }

        const { Destination, Departure, Date, Tons} = req.body;

        const trucks = new Trucks({
            Destination,
            Departure,
            Date,
            Tons

        }); 

        try {
            const newTrucks = await trucks.save();
            res.send(201);
            next();
        } catch {
            return next(new errors.InternalError(err.message));
        }
    });

    // Update a truck
    router.put('/trucks/:id', async(req, res, next) => {
        //check for JSON
        if(!req.is('application/json')) {
            return next(new errors.InvalidContentError("Expects 'application/json'"));
        }

        try {
            const truck = await Trucks.findOneAndUpdate({_id: req.params.id}, req.body);
            res.send(200);
            next();
        } catch {
            return next(
                new errors.ResourceNotFoundError(
                    'There is no truck with the id of $ {req.params.id}'
                )
            );
        }
    });

    //Delete trucks
    router.delete('/trucks/:id', async (req, res, next) => {
        try {
            const trucks = await Trucks.findOneAndRemove({_id: req.params.id});
            res.send(204);
            next();
        } catch(err) {
            return next(
                new errors.ResourceNotFoundError(
                    'There is no truck with the id of $ {req.params.id}'
                )
            );
        }
    });

module.exports = router;

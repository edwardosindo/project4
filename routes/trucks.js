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

//     //Get Trucks
//     router.get('/trucks', async (req, res, next) => {
//         try {
//             const trucks = await Trucks.find({});
//             res.send(trucks);
//             next();
//         } catch(err) {
//             return next(new errors.InvalidContentError(err));
//         } 
//     });

//     //Get Single Truck
//     router.get('/trucks/:id', async (req, res, next) => {
//         try {
//             const truck = await Trucks.findById(req.params.id);
//             res.send(truck);
//             next();
//         } catch(err) {
//             return next(
//                 new errors.ResourceNotFoundError(
//                     'There is no truck with the id of $ {req.params.id}'
//                 )
//             );
//         } 
//     });

//   /*  router.post('/trucks', (req, res ) => {
//         const { Destination, Departure, Date, Tons} = req.body;

//         const trucks = new Trucks({
//             Destination,
//             Departure,
//             Date,
//             Tons

//         }); 


//     });
// */

//     // Add Trucks
//     // router.post('/trucks', async (req, res, next) => {
//     //     console.log(`endpoint reached`);
//     //     //check for JSON
//     //     if(!req.is('application/json')) {
//     //         return next(new errors.InvalidContentError("Expects 'application/json'"));
//     //     }
//     //     console.log(`request${req.body}`);
//     //     const { Destination, Departure, Date, Tons} = req.body;

//     //     const trucks = new Trucks({
//     //         Destination,
//     //         Departure,
//     //         Date,
//     //         Tons

//     //     }); 
//     //     console.log(`truck is${JSON.stringify(trucks)}`);
//     //     try {
//     //         const newTrucks = await trucks.save();
//     //         res.send(201);
//     //         next();
        
//     //     } catch (err) {
//     //         return err;
//     //     }s
//     // }); 
//     router.post('/trucks', (res,req,next) => {
//         //console.log(`req is${JSON.stringify(res.body)}`);
//         console.log(req);
//     })

//     // Update a truck
//     router.put('/trucks/:id', async (req, res, next) => {
//         //check for JSON
//         if(!req.is('application/json')) {
//             return next(new errors.InvalidContentError("Expects 'application/json'"));
//         }

//         try {
//             const truck = await Trucks.findOneAndUpdate({_id: req.params.id}, req.body);
//             res.send(200);
//             next();
//         } catch {
//             return next(
//                 new errors.ResourceNotFoundError(
//                     'There is no truck with the id of $ {req.params.id}'
//                 )
//             );
//         }
//     });

//     //Delete trucks
//     router.delete('/trucks/:id', async (req, res, next) => {
//         try {
//             const trucks = await Trucks.findOneAndRemove({_id: req.params.id});
//             res.send(204);
//             next();
//         } catch(err) {
//             return next(
//                 new errors.ResourceNotFoundError(
//                     'There is no truck with the id of $ {req.params.id}'
//                 )
//             );
//         }
//     });

// module.exports = router;

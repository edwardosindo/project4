const Truck = require('../models/Trucks.js');


// Create and Save a new Truck
exports.create = (req, res) => {

    // Validate request
    /*if(!req.body.content) {
        return res.status(400).send({
            
            message: "Truck content cannot be empty"
        });
    }*/

            // Create a truck
    const truck = new Truck({
        Departure: req.body.Departure,
        Destination: req.body.Destinantion,
        Date: req.body.Date,
        Tons: req.body.Tons

    });

    //Save Truck in database
    truck.save()
    .then(data => {
        res.send(data);
    }). catch(err => {
        res.status(500).send({
        message: err.message || "some error occured while creating the truck"
        });
    });



};


// Retrieve and return all trucks from the database.
exports.findAll = (req, res) => {
    Truck.find()
    .then(trucks => {
        res.send(trucks);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while retrieving trucks."
        });
    });
};



//Find a single truck with a truckId
exports.findOne = (req, res) => {
    Truck.findById(req.params.truckId)
    .then(truck => {
        if(!truck) {
            return res.status(404).send({
                message: "Truck not found with id" + req.params.truckId
            });
        }
        res.send(truck);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: " Truck not found with id " + req.params.truckId
            });
        };
        return res.status(500).send({
            message: "Error retrieving truck with id" + req.params.truckId
        });
    });

};



// Update a truck identified by the truckId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Truck content cannot be empty"
        });
    }

    // Find truck and update it with the request body
    Truck.findByIdAndUpdate(req.params.truckId, {
        Destinantion: req.body.Destinantion,
        Departure: req.body.Departure,
        Date: req.body.Date,
        Tons: req.body.Tons
    }, {new: true})
    .then(truck => {
        if(!truck) {
            return res.status(404).send({
                message: "Truck not found with id" + req.params.truckId
            });
        }
        res.send(truck);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Truck not found with id" + req.params.truckId
            });
        }
        return res.status(500).send({
            message: "Error udating truck with id" + req.params.truckId
        });
    });

};

// Delete a truck with the specified truckId in the request
exports.delete = (req, res) => {
    Truck.findByIdAndRemove(req.params.noteId)
    .then(truck => {
        if(!truck) {
            return res.status(404).send({
                message: "Truck not found with id " + req.params.noteId
            });
        }
        res.send({message: "Truck deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Truck not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete truck with id " + req.params.noteId
        });
    });
};


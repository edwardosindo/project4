const Load = require('../models/Loads.js');


// Create and Save a new Load
exports.create = (req, res) => {
    // console.log('req is:'+ JSON.stringify(req.body))

    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
            
    //         message: "Load content cannot be empty"
    //     });
    // }

            // Create a Load
    const load = new Load({
        Departure: req.body.Departure,
        Destination: req.body.Destination,
        Date: req.body.Date,
        Tons: req.body.Tons,
        Contact: req.body.Contact

    
    });


    //Save Load in database
    load.save()
    .then(data => { 
        // res.send(data);
        // res.flash('success_msg', 'You have successfull posted load.');
        res.redirect('/dashboard');
        return;
        // successRedirect: '/dashboard'
    }). catch(err => {
         res.status(500).send({
                message: err.message || "some error occured while creating the Load"
            });
        });

    


};


// Retrieve and return all loads from the database.
exports.findAll = (req, res) => {
    Load.find()
    .then(loads => {
        res.send(loads);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "some error occurred while retrieving Load."
        });
    });
};

// Search for loads 
exports.search = (req, res) => {
    var db = req.db;
    console.log(req.body);
    var obj = {}
    if(req.body.Departure) {
        obj['Departure'] = req.body.Departure;
    }
    if(req.body.Destination) {
        obj['Destination'] = req.body.Destination;
    }
    db.loads.find(obj, function(err, loads){
        if (err) return err;
        console.log(loads);
        res.send(loads);
    });
};

//Find a single Load with a loadId
exports.findOne = (req, res) => {
    Load.findById(req.params.loadId)
    .then(load => {
        if(!load) {
            return res.status(404).send({
                message: "Load not found with id" + req.params.loadId
            });
        }
        res.send(load);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: " Load not found with id " + req.params.loadId
            });
            
        };
        return res.status(500).send({
            message: "Error retrieving load with id" + req.params.loadId
        });
    });

};



// Update a load identified by the loadId in the request
exports.update = (req, res) => {
    // Validate Request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Truck content cannot be empty"
    //     });
    // }

    // Find load and update it with the request body
    Load.findByIdAndUpdate(req.params.loadId, {
        Destinantion: req.body.Destinantion,
        Departure: req.body.Departure,
        Date: req.body.Date,
        Tons: req.body.Tons
    }, {new: true})
    .then(load => {
        if(!load) {
            return res.status(404).send({
                message: "Load not found with id" + req.params.loadId
            });
        }
        res.send(load);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Load not found with id" + req.params.loadId
            });
        }
        return res.status(500).send({
            message: "Error udating Load with id" + req.params.loadId
        });
    });

};

// Delete a load with the specified loadId in the request
exports.delete = (req, res) => {
    Load.findByIdAndRemove(req.params.loadId)
    .then(load => {
        if(!load) {
            return res.status(404, error).send({
                message: "Load not found with id " + req.params.loadId
            });
        }
        res.send({message: "Load deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Load not found with id " + req.params.loadId
            });                
        }
        return res.status(500).send({
            message: "Could not delete load with id " + req.params.loadId
        });
    });
};

exports.search = (req, res) => {
  
    Load.find()
    .then(load => {
        var result = []
        for(i=0; i<load.length; i++) {
            if(load[i].Departure === req.body.Departure){
                if(load[i].Destination === req.body.Destination){
                    result.push(load[i])
                }
            }
        }
        res.send(result)
    })
}

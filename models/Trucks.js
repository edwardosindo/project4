const mongoose = require('mongoose');


const TrucksSchema = mongoose.Schema({
    Departure: {
        type: String,
        required:true,
        trim:true
    },
    Destination: {
        type: String,
        required: true,
        trim: true
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now,
        trim: true
    },
    Tons: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports  = mongoose.model('Trucks', TrucksSchema);


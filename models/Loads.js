const mongoose = require('mongoose');

const LoadsSchema = new mongoose.Schema({
    Departure: {
        type: String,
        required: true,
        trim: true
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
    Location:{
        type: String,
        require: true,
        trim: true
    },
    Tons: {
        type: String,
        required: true,
        trim: true
    },
    Contact: {
        type: String,
        required: true,
        trim: true
    }
});

const Loads = mongoose.model('Loads', LoadsSchema);

module.exports = Loads;
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
    Tons: {
        type: Number,
        required: true,
        trim: true
    },
    Contact: {
        type: Number,
        required: true,
        trim: true
    }
});

const Loads = mongoose.model('Loads', LoadsSchema);

module.exports = Loads;
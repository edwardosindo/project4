const mongoose = require('mongoose');

const LoadsSchema = new mongoose.Schema({
    Departure: {
        type: String,
        require: true,
        trim: true
    },
    Destination: {
        type: String,
        require: true,
        trim: true
    },
    Date: {
        type: Date,
        require: true,
        default: Date.now,
        trim: true
    },
    Tons: {
        type: Number,
        required: true,
        trim: true
    }
});

const Loads = mongoose.model('Loads', LoadsSchema);

module.exports = Loads;
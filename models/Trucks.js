const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const TrucksSchema = new mongoose.Schema({
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

TrucksSchema.plugin(timestamp);

const Trucks = mongoose.model('Trucks', TrucksSchema);

module.exports = Trucks;

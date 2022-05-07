const listing = require('./listingItem');

const Schema = require('mongoose').Schema;

const listingSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    url: String,
    img: String,
    mileage: String,
    price: { type: Number, required: true, default: 0 }
}, {
    timestamps: true
});

module.exports = listingSchema;
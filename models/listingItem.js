const mongoose = require('mongoose');
require('./make');

const listingSchema = require('./listingItemSchema.js');

module.exports = mongoose.model('Listing', listingSchema);
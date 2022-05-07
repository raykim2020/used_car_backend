const mongoose = require('mongoose');
require('./category');

const itemSchema = require('./shopItemSchema');

module.exports = mongoose.model('Item', itemSchema);
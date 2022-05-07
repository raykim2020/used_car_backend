const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;
const item = require('./shopItem');



const shopItemSchema = new Schema({
    name: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: Number, required: true, default: 0 },
    img: String
}, {
    timestamps: true
});

module.exports = shopItemSchema;
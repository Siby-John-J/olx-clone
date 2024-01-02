const mongoose = require("mongoose")
const db = require('../config/db')

const product = mongoose.Schema({
    name: String,
    desc: String,
    price: Number,
    filename: String
})

module.exports = db.model('product', product)
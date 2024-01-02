const mongoose = require("mongoose")
const db = require('../config/db')

const user = mongoose.Schema({
    username: String,
    password: String,
    isLogin: Boolean
})

module.exports = db.model('user', user)
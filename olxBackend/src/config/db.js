const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/olx-clone').then(() => {
    // console.log('hi')
})

module.exports = mongoose

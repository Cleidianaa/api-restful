const mongoose = require('mongoose')

const shema = new mongoose.Shema({
    name: String,
    brand: Number,
    price: String,

})

const Model = mongoose.model('products', shema)

module.exports = Model
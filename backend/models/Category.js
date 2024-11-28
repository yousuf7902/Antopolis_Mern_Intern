const mongoose = require("mongoose");

const AnimalCategory = new mongoose.Schema({
    category: String
})

module.exports= mongoose.model('category', AnimalCategory)
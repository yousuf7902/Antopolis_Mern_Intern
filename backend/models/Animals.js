const mongoose= require("mongoose");

const AnimalSchema = new mongoose.Schema({
    name: String,
    image: {
        url: {
            type: String,
        },
    },
});

module.exports= mongoose.model("animals", AnimalSchema);
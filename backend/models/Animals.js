const mongoose= require("mongoose");

const AnimalSchema = new mongoose.Schema({
    name: String,
    category: String,
    image: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
});

module.exports= mongoose.model("animals", AnimalSchema);
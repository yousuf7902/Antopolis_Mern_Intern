const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const animals = require("./models/Animals")
const category = require("./models/Category");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Antopolis_Intern");


app.post("/addCategory", (req, res)=>{
    category.create(req.body).then(animals => res.json(animals)).catch(err => res.json(err));
})

app.get("/allCategory", (req, res) => {
    category.find({}).then(animals => res.json(animals).catch(err => res.json(err)))
})

app.listen(8080, () => {
    console.log("Server is running on PORT 8080....");
});


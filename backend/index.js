const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const animals = require("./models/Animals");
const category = require("./models/Category");
const multer = require("multer");
const path = require("path");


app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

mongoose.connect("mongodb://localhost:27017/Antopolis_Intern");

//For image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../uploads"); // Make sure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

//Api starts from here

//all category
app.get("/allCategory", async (req, res) => {
    const categories = await category.find({}); // Fetch all categories from the database
    res.status(201).json(categories);
});

//get all animals 
app.get("/allAnimals", async(req, res) => {
    const allAnimals= await animals.find({});
    res.status(201).json(allAnimals);
})

//add category
app.post("/addCategory", (req, res) => {
    category
        .create(req.body)
        .then((animals) => res.json(animals))
        .catch((err) => res.json(err));
});

//Add animal api
app.post("/addAnimal", upload.single("file"), async (req, res) => {
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const newAnimal = await animals.create({
        name: req.body.animalName,
        image: {
            url:fileUrl
        }, 
    });

    res.status(201).json(newAnimal);
});


//Error Handling
app.all("*", (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server!`);
    err.status = "Not Found";
    err.statusCode = 404;
    next(err);
});
app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "error";

    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
    });
});

app.listen(8080, () => {
    console.log("Server is running on PORT 8080....");
});

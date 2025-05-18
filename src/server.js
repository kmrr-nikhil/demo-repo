const express = require("express");
const FormModel = require("../config/db")
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://nikhil4u43:ZiWImjk8ID0tKsOI@cluster0.px0w9tf.mongodb.net/forms", {
  useNewUrlParser: true,  // Use new URL parser (recommended)
  useUnifiedTopology: true,  // Use the new server discovery and monitoring engine (recommended)
})
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.post("/form", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mob;

    console.log(name, email, mobile);

    try {
        const response = await FormModel.create({
            name: name,
            email: email,
            mobile: mobile
        });
        console.log(response);
        res.status(200).json({
            message: "Form Save in DataBase"
        });
    }

    catch(error) {
        res.status(500).json({
            message: "Internal server Error"
        })
    }
});


// app.get("/getForm", async (req, res) => {
//     try {
//         await FormModel.find()
//     }
// })


app.listen(3000, () => {
    console.log("server started at port 3000");
})
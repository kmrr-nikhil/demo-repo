const express = require("express");

const app = express();


app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        message: `you answer is ${a + b}`
    })
})

app.get("/sub", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        message: `you answer is ${a - b}`
    })
})

app.get("/multiply", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        message: `you answer is ${a * b}`
    })
})

app.get("/divide", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        message: `you answer is ${a / b}`
    })
})


app.listen(3000, () => {
    console.log("server started at port 3000");
})
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const ejs = require("ejs");

app.set("view engine", "ejs");




app.get("/", (req, res) => {
    res.send("welcome to home page");
});

app.get("/report", (req, res) => {

    const details = {
        name: "Rajan Kushwaha",
        age: 21,
        marks: 98,
        collage: "gju"
    }

    res.render("report", { details });
});




app.listen(4005, () => {
    console.log("the server is running at ", 4005)
});
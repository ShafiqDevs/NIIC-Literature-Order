//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

const myRoutes = {
    home: "/",
    checkout: "/checkout",
    getProducts: "/getProducts"
};



// NOTE: objects below will be represented as db documents in mongoose at a later commit
// Value	Weight	Length	Width	Height	delivery-cost

const polishQuran = {

    vlaue: 60,
    weight: 10,
    length: 30,
    width: 24,
    height: 25,
    deliveryCost: 8.2
};

const EnglishQuran = {

    vlaue: 70,
    weight: 15,
    length: 35,
    width: 25,
    height: 25,
    deliveryCost: 8.2
};





// NOTE: this collection will be added later as a db with mongoose
const quranCollection = {
    polishQuran,
    EnglishQuran
};





app.get(myRoutes.home, function (req, res) {
    res.render("home");
});

app.get(myRoutes.getProducts, function (req, res) {

    console.log("app.js: get request recevied");
    res.json(quranCollection);
});

app.listen(3000, function () {
    console.log("server stared on port 3000");
});
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

// const polishQuran = {

//     vlaue: 60,
//     weight: 10,
//     length: 30,
//     width: 24,
//     height: 25,
//     deliveryCost: 8.2
// };

// const englishQuran = {

//     vlaue: 70,
//     weight: 15,
//     length: 35,
//     width: 25,
//     height: 25,
//     deliveryCost: 8.2
// };

// NOTE: this collection will be added later as a db with mongoose
// const quranCollection = {
//     polishQuran,
//     englishQuran
// };


const dbroute = "mongodb+srv://niic:niic@niicorders.zhdke.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbroute);
// const orderSchema = new mongoose.Schema({
//     productName: {
//         type: String,
//         required: false
//     },
//     value: {
//         type: Number,
//         required: false,
//         min:6
//     },
//     weight: {
//         type: Number,
//         min: 0
//     },
//     height: {
//         type: Number,
//         min: 0
//     },
//     length: {
//         type: Number,
//         min: 0
//     },
//     width: {
//         type: Number,
//         min: 0
//     },
//     name: {
//         type: String,
//         required: false
//     },
//     property: {
//         type: String,
//         required: false
//     },
//     street: {
//         type: String,
//         required: false
//     },
//     town: {
//         type: String,
//         required: false
//     },
//     country: {
//         type: String,
//         required: false
//     },
//     postCode: {
//         type: String,
//         required: false
//     },
//     Country: {
//         type: String,
//         required: false
//     },
//     telephone: {
//         type: String,
//         required: false
//     },
//     email: {
//         type: String,
//         required: false
//     },


// });
//const literatureOrder = mongoose.model("literatureOrder",orderSchema);












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
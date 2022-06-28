//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();


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



mongoose.connect(process.env.dbroute);


const orderSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: false,
        min: 6
    },
    weight: {
        type: Number,
        min: 0
    },
    height: {
        type: Number,
        min: 0
    },
    length: {
        type: Number,
        min: 0
    },
    width: {
        type: Number,
        min: 0
    },
    name: {
        type: String,
        required: false
    },
    property: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    town: {
        type: String,
        required: false
    },
    country1: {
        type: String,
        required: false
    },
    postCode: {
        type: String,
        required: false
    },
    Country2: {
        type: String,
        required: false
    },
    telephone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },


});

const quranSchema = new mongoose.Schema({
    itemName: String,
    value: Number,
    weight: Number,
    length: Number,
    width: Number,
    height: Number,
    deliveryCost: Number

});
const literatureOrder = mongoose.model("literatureOrder", orderSchema);
const quranCollection = mongoose.model("quranCollection", quranSchema);








app.get(myRoutes.home, function (req, res) {
    res.render("home");
});

app.get(myRoutes.getProducts, function (req, res) {

    console.log("app.js: get request recevied");
    getQuranProducts(res,quranCollection);

});

app.listen(3000, function () {
    console.log("server stared on port 3000");
});


//---------------------- Functions -----------------------------//

function getQuranProducts(_res, _quranCollection) {

    let reslt = {};

    _quranCollection.find({}, function (err, docs) {
        docs.forEach(element => {
            // combining all db items into one object => object: {itemName: {itemName,value,deliveryCost} }
            reslt[element.itemName] = {
                itemName: element.itemName,
                value: element.value,
                deliveryCost: element.deliveryCost
            };
        });
        _res.send(reslt);
    });




}
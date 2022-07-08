//jshint esversion:6


const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { val } = require("jshint/src/options");
const dotenv = require("dotenv").config();


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

const myRoutes = {
    home: "/home",
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
    County: {
        type: String,
        required: false
    },
    postCode: {
        type: String,
        required: false
    },
    Country: {
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

//------------------------------ Routes ------------------------------------//
app.get(myRoutes.home, function (req, res) {
    //res.json([{age: 23}, {age: 18}, {age:3}]);
    res.render("home");
});

app.get(myRoutes.getProducts, function (req, res) {

    console.log("app.js: get request recevied");
    getQuranProducts(res,quranCollection);

});

app.listen(3001, function () {
    console.log("server stared on port 3001");
});


//---------------------- Functions -----------------------------//

function getQuranProducts(_res, _quranCollection) {

    let reslt = [];

    _quranCollection.find({}, function (err, docs) {
        //console.log(docs);
        // docs.forEach(element => {
            
        //     // combining all db items into one object => object: {itemName: {itemName,value,deliveryCost} }
        //     reslt[element.itemName] = {
        //         itemName: element.itemName,
        //         value: element.value,
        //         deliveryCost: element.deliveryCost
        //     };
        // });
        docs.map((value,index) =>{


            reslt.push(value);
        })
        //console.log(reslt);
        _res.send(reslt);
    });




}
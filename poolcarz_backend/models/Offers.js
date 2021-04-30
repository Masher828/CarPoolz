var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Offer = new Schema({
    id : {
        type : Number,
        required : true,
        min : 0,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    car : {
        type : String,
        required : true
    },
    seatsLeft:{
        type : Number,
        required : true,
        min : 0,
        max : 8
    },
    pickUp:{
        type : String,
        required : true
    },
    destination : {
        type : String,
        required : true
    }

},{timestamps : true});

module.exports = mongoose.model("Offer",Offer);
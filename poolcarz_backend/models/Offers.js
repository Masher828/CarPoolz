var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Offer = new Schema({
    name : {
        type : String,
        required : true
    },
    car : {
        type : String,
        required : true
    },
    seats:{
        type : Number,
        required : true,
        min : 0,
        max : 8
    },
    start:{
        type : String,
        required : true
    },
    end : {
        type : String,
        required : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        required : true
    }

},{timestamps : true});

module.exports = mongoose.model("Offer",Offer);
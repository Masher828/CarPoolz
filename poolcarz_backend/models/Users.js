
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



const User = new Schema({
    name : {
        type : String,
        required : true
    },
    rideBooked:{
        type : String,
        default : null
    }
},{timestamps: true});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",User);

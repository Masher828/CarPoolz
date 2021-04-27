var mongoos  = require('mongoose');
var Schema = mongoos.Schema;

const Ride = new Schema({
    rideId : {
        type : Number,
        required : true
    },
    riderName : {
        type : String,
        required : true
    },
    rideeName : {
        type : String,
        required : true
    },
    pickUp :{
        type : String,
        required : true
    },
    destination : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.Model('Ride', Ride);
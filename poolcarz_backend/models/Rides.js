var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

const Ride = new Schema({
    id : {
        type : Number,
        autoIncrement : true
    },
    riderName : {
        type : String,
        required : true
    },
    rideeName : {
        type : String,
        required : true
    },
    rideeId : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    status : {
        type : String,
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.model('Ride', Ride);
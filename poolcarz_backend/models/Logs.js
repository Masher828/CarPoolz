var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    func : {
        type : String,
        required : true
    },
    info : {
        type : String,
        required : true
    },
    err : {
        type : String,
        required : true
    },
    line : {
        type : Number,
        required : true
    }
}, {timestamps : true});

module.exports = mongoose.model('Log',logSchema);
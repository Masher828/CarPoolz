
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const User = new Schema({},{timestamps: true});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",User);

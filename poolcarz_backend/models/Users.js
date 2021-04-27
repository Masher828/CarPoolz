
var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = require('mongoose');
var Schema = passport.Schema;

const User = new Schema({},{timestamps: true});

User.plugin(passportLocalMongoose);

module.exports = mongoose.Model("User",User);

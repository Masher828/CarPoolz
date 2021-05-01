var express  = require('express');
var Ride = express.Router();
const Rides = require('../models/Rides');
const Offer = require('../models/Offers');
const Log = require('../models/Logs');
const cors = require('./cors');
const authenticate = require('../authenticate');
const mongoose = require('mongoose');
const Users = require('../models/Users');


addErrorToLog = (data, res) =>{
        Log.create(data)
        .then((log)=>{
            log.save();
            res.statusCode = 401;
            res.setHeader("Content-Type",'application/json');
            res.json({success : false, info : "Encountered Error"})
        }, (err)=>next(err))
        .catch((err)=>{console.log(err)});
       
}

Ride.route('/')
.options(cors.corsWithOptions, (req, res)=>{res.sendStatus(200);})
.get(cors.cors, authenticate.verifyUser, (req, res, next)=>{
    Offer.find({})
    .then((offer)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success : true, offer : offer})
    }, (err)=>addErrorToLog({func : "Ride Get", info: "something",err: err,line : 26}, res))
    .catch((err)=>addErrorToLog({func : "Ride Get", info: "something",err: err,line : 27}, res));
});


Ride.route('/bookride')
.options(cors.corsWithOptions,(req, res)=>{res.sendStatus(200);})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next)=>{
    Offer.findById({_id : mongoose.Types.ObjectId(req.body.offerId)})
    .then((offer)=>{
    if (offer !==null && offer.seats>=1 && !req.user.rideBooked){
    req.body.riderName = offer.name;
    req.body.rideeId = req.user._id;
    req.body.rideeName = req.user.name;
    req.body.status = "Booked";
    Rides.create(req.body)
    .then((ride)=>{
            Offer.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.offerId),{seats: offer.seats-1})
        .then((offer)=>{
            ride.save();
            Users.findByIdAndUpdate(req.user._id,{rideBooked : ride._id})
            .then((user)=>{
                
                offer.save();
                user.save()
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json({success : true, rides : ride})
            })
            
        }, (err)=>addErrorToLog({func : "book ride", info: "something",err: err,line : 44}, res))
        .catch((err)=>addErrorToLog({func : "book ride", info: "something",err: err,line : 45}, res));
    },(err)=>addErrorToLog({func : "book ride", info: "something",err: err,line : 46}, res))
    .catch((err)=>addErrorToLog({func : "book ride", info: "something",err: err,line : 47}, res));
    }
    else{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success : false, info: "Not Enough Setas available"});
    }
    }, (err)=>console.log(err))
    .catch((err)=>console.log(err));
});


Ride.route('/cancelride')
.options(cors.corsWithOptions,  (req, res)=>{res.sendStatus(200);})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next)=>{
    Offer.findById({_id : mongoose.Types.ObjectId(req.body.offerId)})
    .then((offer)=>{
        if (offer!==null){
            seats = offer.seats +1;
            Rides.findByIdAndUpdate(mongoose.Types.ObjectId(req.user.rideBooked),{status: "Cancelled"})
            .then((ride)=>{
                Offer.findByIdAndUpdate( mongoose.Types.ObjectId(req.body.offerId),{seats: offer.seats+1})
                .then((offer)=>{
                    Users.findByIdAndUpdate(req.user._id,{rideBooked : ""})
                    .then((user)=>{
                        ride.save();
                        offer.save();
                        user.save();
                        res.statusCode = 200;
                        res.setHeader('Content-Type','application/json');
                        res.json({success : true})
                    })
                }, (err)=>addErrorToLog({func : "Cancel Ride", info: "something",err: err,line : 63},res))
                .catch((err)=>addErrorToLog({func : "Cancel Ride", info: "something",err: err,line : 64},res));
            },(err)=>addErrorToLog({func : "Cancel Ride", info: "something",err: err,line : 65},res))
            .catch((err)=>addErrorToLog({func : "Cancel Ride", info: "something",err: err,line : 66},res));
        }
        else{
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json({success : false, info: "No ride"});
        }
    })
});


Ride.route('/offerride')
.options(cors.corsWithOptions, (req, res)=>{res.sendStatus(200);})
.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next)=>{
    req.body.user = req.user._id;
    Offer.create(req.body)
    .then((offer)=>{
        offer.save()
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success : true, ride : offer})
    },(err)=>addErrorToLog({func : "Cancel Ride", info: "something",err: err,line : 79}, res))
    .catch((err)=>addErrorToLog({func : "Cancel Ride", info: "something",err: err,line : 80},res));
});

module.exports = Ride;
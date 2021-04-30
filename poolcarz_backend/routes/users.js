var express = require('express');
const passport = require('passport');
var router = express.Router();
var User = require('../models/Users');
var authenticate = require('../authenticate');
/* GET users listing. */
const cors = require('./cors');

router.options('*',cors.corsWithOptions, (req, res)=>{res.sendStatus(200);})

router.post('/signup', cors.corsWithOptions, (req,res, next)=>{
  console.log(req.body);
User.register(new User({username : req.body.username}), req.body.password)
.then((user, err)=>{
  if (err){
    res.statusCode = 400;
    res.setHeader('Content-Type','application/json');
    res.json({success : false, message : err});
  }
  else{
    user.save((err, user)=>{
      if (err){
        res.statusCode = 400;
        res.setHeader('Content-Type','application/json');
        res.json({success : false, message : err});
      }
      else{
        passport.authenticate('local')(req,res, ()=>{
          res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({success : true, message: "Signup successful"});
        })
      }
    })
  }
}, (err)=>next(err));
});

router.post('/login', (req, res, next)=>{
  passport.authenticate('local', (err, user, info)=>{
    if (err){
      return next(err);
    }
    if (!user){
        res.statusCode = 400;
        res.setHeader('Content-Type','application/json');
        res.json({success : false, message : err});
    }
      req.logIn(user, (err)=>{
        if (err){
          res.statusCode = 400;
          res.setHeader('Content-Type','application/json');
          res.json({success : false, message : err});
        }
        else{
          var token = authenticate.getToken({_id : req.user._id});
          res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({success : true, message: "Login successful", token:token});
        }
      })
  })(req, res, next);
})

router.get('/logout', (req, res)=>{
  if (!req.session.passport){
    res.statusCode = 403;
    res.setHeader('Content-Type','application/json');
    res.json({success:false, message:"You are not logged In"});
  }
  else{
    req.session.destroy();
    res.clearCookie('session-id');
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({success:true, message:"Successfully Logged out"});
  }
})
module.exports = router;

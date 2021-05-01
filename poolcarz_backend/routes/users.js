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
User.register(new User({username : req.body.username, name : req.body.name}), req.body.password)
.then((user, err)=>{
  if (err){
    res.statusCode = 400;
    res.setHeader('Content-Type','application/json');
    res.json({success : false, message : err});
  }
  else{
    user.save((err, user)=>{
      if (err){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success : false, message : err});
      }
      else{
        passport.authenticate('local')(req,res, ()=>{
          res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({success : true});
        })
      }
    })
  }
}, (err)=>{res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json({success : false, message : err});})
  .catch((err)=>{res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({success : false, message : err})});
});

router.post('/login', cors.corsWithOptions, (req, res, next)=>{
  passport.authenticate('local', (err, user, info)=>{
    if (err){
      return next(err);
    }
    if (!user){
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json({success : false, message : "Invalid Id and Password"});
    }
    else{
      req.logIn(user, (err)=>{
        if (err){
          res.statusCode = 400;
          res.setHeader('Content-Type','application/json');
          res.json({success : false, message : err});
        }
        else{
          console.log(req.session);
          var token = authenticate.getToken({_id : req.user._id});
          res.statusCode = 200;
          res.setHeader('Content-Type','application/json');
          res.json({success : true, message: "Login successful", token:token});
        }
      })
    }
      
  })(req, res, next);
});

router.get('/logout',cors.corsWithOptions, (req, res)=>{
  req.logOut();
  req.session.destroy();
  res.clearCookie('session-id');
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json({success:true, message:"Successfully Logged out"});

})
module.exports = router;

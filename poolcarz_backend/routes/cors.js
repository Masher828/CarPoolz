const cors = require('cors');

var whitelist = ["http://localhost:3000", "http://localhost:3001"];
var corsWithOptions = (req, callback)=>{
    if (whitelist.indexOf(req.header('Origin')!==-1)){
        var corsOption = {origin : true};
    }
    else{
        var corsOption = {origin : false};
    }
    callback(null, corsOption);
}

exports.cors = cors();
exports.corsWithOptions = cors(corsWithOptions);
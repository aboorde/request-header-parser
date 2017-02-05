var express = require("express");
var path = require("path");


var app = express()

app.get('/api/whoami', function(req, res) {
    var regExp = /\(([^)]+)\)/;
    var usrOS = regExp.exec(req.headers['user-agent'])[1]
    var resObj = {
        ipaddress: req.headers['x-forwarded-for'],
        language: req.headers['accept-language'].split(',')[0],
        software: usrOS
    };
    console.log(resObj);
    res.status(200).send(resObj);
})
app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 3000!')
})
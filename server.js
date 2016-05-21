var express = require('express');


var app = express();
var name;
var email;
app.get('/', function(req, res) {

    res.render('login.ejs');

});
app.get('/home', function(req, res) {

 res.render('home.ejs',{name:req.query.name,email:req.query.email});
 console.log(req.query.name);
 

});
app.listen(8080);
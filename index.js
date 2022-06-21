var mongoose = require('mongoose');
var express = require('express');
var bodyparse =require('body-parser');
var roter = require('./route');


var app= express();
app.use('/api', route);

app.listen(process.env.PORT,()=>{
    console.log("server Started");
})
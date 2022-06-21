var mongoose = require('mongoose');
var express = require('express');
var bodyparse =require('body-parser');
var route = require('./route');


var app= express();
app.use('/api', route);

app.listen(3000,()=>{
    console.log("server Started");
})

const { Router } = require('express');
var express = require('express');
var route = express.Router();
route.get("/",(req,res)=>{
    res.sendFile("index.html",{root:__dirname});
});
module.exports = Router;

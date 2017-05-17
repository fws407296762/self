const express = require("express");
const app = express();

app.get("/",function(req,res){
     res.status(302).send("121212")
})

app.get("/jump",function(req,res){
    res.send("JUMP")
})

app.listen(3000);
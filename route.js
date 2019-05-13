const express= require("express");
const router= express.Router();

router.get("/", function(req,res){
    res.send("This is the GET verb! ");
});

router.post("/", function(req,res){
    res.send("This is the POST verb!");
});

module.exports= router;
const express = require("express");
const userRoute = express.Router();
const authenticate = require("../middleware/auth.middleware");

userRoute.get("/api/dashbord", authenticate, (req, res)=>{
    res.status(200).json({
        data:"this is the dashbord of user",
        username:req.user.username
    });
});

userRoute.get("/api/chat",authenticate, (req, res)=>{
    res.send("chats");
});

userRoute.get("/api/video",authenticate, (req, res)=>{
    res.send("video");
});

module.exports = userRoute;
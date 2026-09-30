const express = require("express");
const authRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../model/user");
const ExpressError = require("../utils/error");
const authentication = require("../middleware/auth.middleware");


authRoute.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const newUser = await Users.create({
        username,
        password: hash
    });

    if (!newUser) {
        throw new ExpressError(402, "invalid crediential!");
    }

    const token = jwt.sign(
        { userid: newUser._id},
        process.env.JWT_SECRET,
        { expiresIn: "12h" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 ,
    });

    res.status(200).json({
        data: "Signup success",
        username:newUser.username
    });
});

authRoute.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });

    if (!user) {
        throw new ExpressError(402, "invalid crediential!");
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
        throw new ExpressError(402, "invalid crediential! fromn password");
    }

    const token = jwt.sign(
        { userid: user._id},
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 ,
    });

    res.status(200).json({
        data: "Login success",
        username:user.username
    }); 

});

authRoute.get("/authme",authentication,  (req, res)=>{
    const user = {
        username:req.user.username,
        data:"Authenticated successfully"
    };
    res.status(200).json({
        user
    });
})

module.exports = authRoute;
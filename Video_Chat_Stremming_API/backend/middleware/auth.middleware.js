const ExpressError = require("../utils/error");
const jwt = require("jsonwebtoken");
const Users = require("../model/user");
const {statusCode} = require("http-status-codes");

module.exports = async (req, res, next)=>{
    const token = req.cookies.token;

    if(!token){
        throw new ExpressError(401, "Authentication required!");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Users.findById(decoded.userid);

    if(!user){
        throw new ExpressError(401, "Invalid crediential!");
    }
    
    req.user = user;

    next();
};
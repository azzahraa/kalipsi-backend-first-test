// const express = require('express')
// const router = express.Router();
// const user = require('../models/User');
// const { body, validationResult } = require('express-validator');
// // const bcrypt = require("bcrypt");
// // const jwt = require("jsonwebtoken");
// // require('dotenv').config();

// router.get('/login', 
// [ body("email adress", "Please enter your email").isEmail(),
// body("password", "input secret password")], (req,res)=>{ 
//     if (email.req.body && password.req.body !== null)
//        {     // find if user exists
//         user.find({ email : req.body.email || {uname : req.body.uname} || {password : req.body.password}}).then((user)=> {
//             if (req.body.email!== email || req.body.password !== password){
//                 return alert("user doesn't exists, please signup first or check you login input")
//             }
//         });
//     };
// module.exports = router ;
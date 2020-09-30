const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const user = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config()



router.post(
    "/signup",
    [
        body("fname", "Please enter your first name").notEmpty().isAlpha() ,
        body("lname" , "Please enter your last name even if you regret it").notEmpty().isAlpha(),
        body("date of birth", "there is no place for agism here, rest assured").notEmpty().isAlphanumeric() ,
        body("email adress", "Please enter a valid email so we can trust you").isEmail(),
        body("password", "Big Brother is watching, let's give him hell").isLength({
            min : 8,
            max : 25,
        }),
    ],
    (req, res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors : errors.array()
            });
        }
        // find if user exists
        user.find({ email : req.body.email || {uname : req.body.uname}}).then((user)=> {
            if (req.body.email === email){
                return alert("user email already exists")
            }
        })
    //crypt password, check if it's unique
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
          newUser.password = hashedPassword;
          newUser.save();
          let payload = {
            id: newUser._id,
          };
          jwt.sign(payload, process.env.SECRETKEY, (err, token) => {
            if (err) {
              throw err;
            }
            res.json({ token });
          });
        });
      });
    }
)

module.exports = router;
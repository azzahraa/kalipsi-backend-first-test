const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    uname : { type : String,
                required : true},
    fname : { type : String,
                required : true},
    lname : { type : String,
                required : true},
    email : { type : String,
                required : true},
    password : { type : String,
                required : true},
    date_of_birth : { type : String,
                required : true},
    bio : { type : String,
                required : true},
    gender : [],
    
},

{ timestamps : true},

);

module.exports = mongoose.model("User", UserSchema);
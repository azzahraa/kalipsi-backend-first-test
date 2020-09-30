const mongoose = require('mongoose');


const messagesSchema = new mongoose.Schema({
    chat:{
        type : mongoose.Schema.Types.ObjectId,
        required : "chat is required !",
        ref : "chat",
    },
    user:{
        type : mongoose.Schema.Types.ObjectId,
        required : "chat is required!",
        ref : "user",
    },
    message : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model("messages", messagesSchema);
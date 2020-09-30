const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    uname : { type : String,
                required : true}
    });
const picSchema = new mongoose.Schema({
    pic : {
        type : Object,
    }
})
    module.exports = mongoose.model("chat", chatSchema, "pic", picSchema);
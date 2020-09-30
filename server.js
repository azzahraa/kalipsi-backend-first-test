const express = require('express');
// const app = express();
const mongoose = require('mongoose')
require('dotenv').config();

// const bcrypt = require('bcryptjs');
const user = require('./models/User');
 require('./routes/singup')

// database
mongoose.connect(process.env.DB, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify: false,},
    // (err) => {
    //     if (err) {
    //       console.log("Connection Failed!");
    //     } else {
    //       console.log("Database Connected...");
    //     }
    //   }
    );
    mongoose.connection.on("error", (err) => {
        console.log("Mongoose Connection ERROR: " + err.message);
      });
      
      mongoose.connection.once("open", () => {
        console.log("MongoDB Connected!");
      });
      
//middleware
// app.use(express.json())
//Bring in the models
require("./models/User");
require("./models/chat");
require("./models/messages");

const app = require("./app");
//routes
// app.use("/signup", require("./routes/singup"));
// app.use("/login", require("./routes/login"));
// // app.use("/profile", require("./routes/profile"));

// //singup checks
// // app.get('/user', (req,res)=>{
// //     res.json(user
// //     )
// // })
// // app.post('/user', async (req, res) => {
// //     try {
// //       const hashedPassword = await bcrypt.hash(req.body.password, 10)
// //       const user = { name: req.body.name, password: hashedPassword }
// //       users.push(user)
// //       res.status(201).send()
// //     } catch {
// //       res.status(500).send()
// //     }
// //   })
//   app.get('/signup', (req,res)=>{
//     res.json(user
//     )
// app.post('/signup', async(req,res)=>{
//     const person = user.find(person => person.name = req.body.name)
//     if (person == user){
//         return res.status(400).send('profile already exists')
//     }
//     try{
//         if(await bcrypt.compare(req.body.password, person.password)){
//             res.send('success')
//         } else{
//             res.send("password already exists")
//         }
//     } catch{
//         res.status(500).send()
//     }
// });


//port 
app.listen(5000, (err) =>{
    if (err) {
        throw err.message;
    }
    console.log('Kalipso server running on 5000');})

//realtime soket.io

// const io = require("socket.io")(server);
// const jwt = require("jwt-then");

// const Message = mongoose.model("Message");
// const User = mongoose.model("User");

// io.use(async (socket, next) => {
//   try {
//     const token = socket.handshake.query.token;
//     const payload = await jwt.verify(token, process.env.SECRET);
//     socket.userId = payload.id;
//     next();
//   } catch (err) {}
// });

// io.on("connection", (socket) => {
//   console.log("Connected: " + socket.userId);

//   socket.on("disconnect", () => {
//     console.log("Disconnected: " + socket.userId);
//   });

//   socket.on("joinRoom", ({ chatroomId }) => {
//     socket.join(chatroomId);
//     console.log("A user joined chatroom: " + chatroomId);
//   });

//   socket.on("leaveRoom", ({ chatroomId }) => {
//     socket.leave(chatroomId);
//     console.log("A user left chatroom: " + chatroomId);
//   });

//   socket.on("chatroomMessage", async ({ chatroomId, message }) => {
//     if (message.trim().length > 0) {
//       const user = await User.findOne({ _id: socket.userId });
//       const newMessage = new Message({
//         chatroom: chatroomId,
//         user: socket.userId,
//         message,
//       });
//       io.to(chatroomId).emit("newMessage", {
//         message,
//         name: user.name,
//         userId: socket.userId,
//       });
//       await newMessage.save();
//     }
//   });
// });
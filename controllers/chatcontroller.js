const mongoose = require("mongoose");
const Chat = mongoose.model("chat");

exports.createChat = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Chat name can contain only alphabets.";

  const chatExists = await Chat.findOne({ name });

  if (chatExists) throw "Chat with that name already exists!";

  const chat = new Chat({
    name,
  });

  await chat.save();

  res.json({
    message: "Chat created!",
  });
};
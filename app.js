const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Setup Cross Origin
app.use(require("cors")());
//Bring in the routes
app.use("/chat", require("./routes/chat"));
app.use("/user", require("./routes/user"));
app.use("/singup", require("./routes/singup"));
app.use("/profile", require('./routes/profile'))
//Setup Error Handlers
const errorHandlers = require("./handlers/Errorhandlers");
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

module.exports = app;

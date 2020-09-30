const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatController");

const auth = require("../midddlewares/auth");

router.post("/", auth, catchErrors(chatroomController.createChatroom));

module.exports = router;
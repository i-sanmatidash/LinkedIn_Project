const express = require("express");
const router = express.Router();
const messagingController = require("../controllers/messagingController");

router.post("/send", messagingController.sendMessage);

router.get(
  "/conversation/:userId1/:userId2",
  messagingController.getConversation
);

module.exports = router;

const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/:userId", profileController.getUserProfile);

router.put("/:userId", profileController.updateUserProfile);

module.exports = router;

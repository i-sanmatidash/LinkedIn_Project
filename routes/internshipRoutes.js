const express = require("express");
const router = express.Router();
const internshipController = require("../controllers/internshipController");
const {
  authenticateUser,
  isHR,
  isEngineeringStudent,
} = require("../middleware/authMiddleware");

router.use(authenticateUser);

router.post("/post", isHR, internshipController.postInternship);
router.get(
  "/getForEngineering",
  isEngineeringStudent,
  internshipController.getInternshipsForEngineering
);

module.exports = router;

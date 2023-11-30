const express = require("express");
const router = express.Router();

// //check if engineering student
// const isEngineeringStudent = (req, res, next) => {
//   const user = req.user;

//   if (user && user.course === "Engineering") {
//     next();
//   } else {
//     res.json({ message: "Forbidden: Access denied" });
//   }
// };

router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;

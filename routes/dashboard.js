const express = require("express");
const router = express.Router();

// Middleware to check if the user is an engineering student
// const isEngineeringStudent = (req, res, next) => {
//   const user = req.user;

//   if (user && user.course === "Engineering") {
//     next(); // User is an engineering student, proceed to the next middleware or route handler
//   } else {
//     res.json({ message: "Forbidden: Access denied" });
//   }
// };

router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;

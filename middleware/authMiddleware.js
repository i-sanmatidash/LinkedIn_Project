const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(decodedToken.userId);

    // Attach user information to the request object
    req.user = user;

    next();
  } catch (error) {
    console.error("Authentication failed:", error);
    res.json({ message: "Authentication failed" });
  }
};

const isHR = (req, res, next) => {
  if (req.user && req.user.role === "HR") {
    return next();
  }

  return res.json({ message: "Forbidden: Access denied" });
};

const isEngineeringStudent = (req, res, next) => {
  if (req.user && req.user.course === "Engineering") {
    return next();
  }

  return res.json({ message: "Forbidden: Access denied" });
};

module.exports = { authenticateUser, isHR, isEngineeringStudent };

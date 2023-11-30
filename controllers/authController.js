const User = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const secretKey = `${process.env.SECRET_KEY}`;

// Controller functions
exports.getLogin = (req, res) => {
  res.render("login");
};

exports.postLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.json({ message: "Invalid username or password" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.json({ message: "Invalid username or password" });
    }
    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
};

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
      course: req.body.course,
      role: req.body.role,
    });

    await newUser.save();

    res.redirect("/dashboard");
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" });
  }
};

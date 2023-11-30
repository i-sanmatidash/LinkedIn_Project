const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboard");
const profileRoutes = require("./routes/profileRoutes");
const messagingRoutes = require("./routes/messagingRoutes");
const internshipRoutes = require("./routes/internshipRoutes");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//mongodb Connection

mongoose
  .connect(
    `mongodb+srv://sanmatidash:${process.env.PASSWORD}@cluster0.et7dgjb.mongodb.net/LinkedIn`
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Mongo Connection Error", err);
  });

//routes connection
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/profile", profileRoutes);
app.use("/messaging", messagingRoutes);
app.use("/internship", internshipRoutes);

app.get("/", (req, res) => {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

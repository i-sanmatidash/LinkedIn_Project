const Profile = require("../models/profile");
const User = require("../models/user");

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const profile = await Profile.findOne({ user: userId }).populate(
      "user",
      "email"
    );

    if (!profile) {
      return res.json({ message: "Profile not found" });
    }

    res.json(profile);
  } catch (error) {
    console.error("Error getting user profile:", error);
    res.json({ message: "Internal server error" });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { fullName, bio } = req.body;

    let profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return res.json({ message: "Profile not found" });
    }

    profile.fullName = fullName || profile.fullName;
    profile.bio = bio || profile.bio;

    await profile.save();

    res.json(profile);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.json({ message: "Internal server error" });
  }
};

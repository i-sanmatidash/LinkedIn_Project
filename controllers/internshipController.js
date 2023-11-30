const Internship = require("../models/internship");

exports.postInternship = async (req, res) => {
  try {
    const { title, description, company, location, duration, requirements } =
      req.body;
    const postedBy = req.user.id;

    // Check if the user is an HR representative
    if (!req.user || req.user.role !== "HR") {
      return res.json({ message: "Forbidden: Only HR can post internships" });
    }

    const newInternship = new Internship({
      title,
      description,
      company,
      location,
      duration,
      requirements,
      announcedByHR: true,
      postedBy,
    });

    await newInternship.save();
    res.json({ message: "Internship posted successfully" });
  } catch (error) {
    console.error("Error posting internship:", error);
    res.json({ message: "Internal server error" });
  }
};

// Get internships for engineering students
exports.getInternshipsForEngineering = async (req, res) => {
  try {
    const internships = await Internship.find({ announcedByHR: true });

    res.json({ internships });
  } catch (error) {
    console.error("Error getting internships for engineering students:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

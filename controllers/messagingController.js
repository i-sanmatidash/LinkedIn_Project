const Messaging = require("../models/messaging");
const User = require("../models/user");

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.json({ message: "Sender or receiver not found" });
    }

    const newMessage = new Messaging({
      sender: senderId,
      receiver: receiverId,
      message: message,
    });

    await newMessage.save();

    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending message:", error);
    res.json({ message: "Internal server error" });
  }
};

exports.getConversation = async (req, res) => {
  try {
    const { userId1, userId2 } = req.params;

    const conversation = await Messaging.find({
      $or: [
        { sender: userId1, receiver: userId2 },
        { sender: userId2, receiver: userId1 },
      ],
    }).sort({ timestamp: 1 });

    res.json(conversation);
  } catch (error) {
    console.error("Error getting conversation:", error);
    res.json({ message: "Internal server error" });
  }
};

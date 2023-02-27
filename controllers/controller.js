const User = require("../models/model");

const getAllUsers = (req, res) => {
  res.send("Welcome to MLM app");
};

const registerUser = async (req, res) => {
  const { sponsorId, sponsorName, fullName, email } = req.body;
  try {
    const user = await User.findOne({ sponsorId, sponsorName, email });
    console.log(user);
    if (user) {
      return res.status(404).send(`This user already existed. check "sponsorId/sponsorName/email"`);
    } else {
      const newUser = new User({
        sponsorId,
        sponsorName,
        fullName,
        email,
      });

      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const loginUser = (req, res) => {
  res.send("Login page created");
};

const autoPull = (req, res) => {
  res.send("Auto pull created");
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
  autoPull,
};

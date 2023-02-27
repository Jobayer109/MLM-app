const getAllUsers = (req, res) => {
  res.send("Welcome to MLM app");
};

const registerUser = (req, res) => {
  res.send("Register page created");
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

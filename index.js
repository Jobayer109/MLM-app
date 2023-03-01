const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
require("./config/db");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// routes
app.use("/", require("./routes/routes"));

// Server run
const serverStart = async () => {
  try {
    await dbConnect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    res.status(500).send("Hey, something went wrong with server");
  }
};

serverStart();

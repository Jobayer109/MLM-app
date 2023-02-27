const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("server is running");
});

// Server run
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

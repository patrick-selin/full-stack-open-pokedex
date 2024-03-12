require("dotenv").config();
const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5002;

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("1.1"); // change this string to ensure a new version deployed
});

app.listen(PORT, () => {
  this_causes_error;
  console.log(`Server started on port: ${PORT}`);
});

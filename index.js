const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi from NodeJS Project");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("listening ... ");
});

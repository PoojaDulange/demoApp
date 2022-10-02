const express = require("express");
const app = express();
const port = 1337;
const users = require("./api/users/users.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();
require("./config/db");
console.log(process.env.url);

app.listen(port, () => {
  console.log(" Server is started at 8080");
});

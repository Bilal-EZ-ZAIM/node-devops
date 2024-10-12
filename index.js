const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Home page");
}); 

app.get("/about", (req, res) => {
  res.send("Hello Aboute");
});

app.listen("3000", () => console.log("server is runnig on port 3000"));

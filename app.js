const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay();
  if (currentDay === 6) {
    res.write("<h1>Yay it's the weekend.</h1>");
  } else {
    res.sendFile(`${__dirname}/index.html`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

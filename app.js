const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["Buy food", "cook food", "Eat food"];
const port = 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ encoded: true }));
app.get("/", (req, res) => {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newListItem: item });
});
app.post("/", (req, res) => {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

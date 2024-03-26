const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home/index_kor");
  // res.render("home/construction")
});

app.get("/eng", (req, res) => {
  res.render("home/index_eng");
  // res.render("home/construction")
});

app.use(express.static("./css"));
app.use(express.static("./images"));
app.use(express.static("./js"));

app.listen(3003, () => {
  console.log("Server Start");
});

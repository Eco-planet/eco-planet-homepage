const express = require("express")
const app = express()

app.set("views", "./views");
app.set("view engine", "ejs")

app.get('/main', (req, res) => {
  res.render("home/index")
})

app.use(express.static('./css'))
app.use(express.static('./images'))
app.use(express.static('./js'))

app.listen(3003, () => {
  // console.log(app)
  console.log("Server Start")
})
const express = require("express");
const path = require("path");
const productsRouter = require("./routes/products");
const productsApiRouter = require("./routes/api/products")
const bodyParser = require("body-parser");

// app
const app = express();

// de esta forma usamos el middleware.
app.use(bodyParser.json())

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// routes
app.use("/products", productsRouter);
app.use("/api/products", productsApiRouter);

// redirect
app.get("/", function (req, res) {
  res.redirect('/products')
})

// server
const server = app.listen(8000, function () {
  console.log(`Listening http://localhost:${server.address().port}`);
});
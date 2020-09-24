const express = require("express");
const router = express.Router();

const products = [
  {
    name: "Pantalon",
    price: 44,
  },
  {
    name: "Camisa",
    price: 44,
  },
  {
    name: "Polo",
    price: 44,
  },
];

router.get('/', function(req, res){
    res.render("products", {products})
})

module.exports = router;
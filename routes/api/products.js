const express = require("express");
const router = express.Router();
const productMocks = require("../../utils/mocks/products")

// Se dice Mock a los datos hardcodeados.
router.get("/", function(req, res) {
    // Cuando la url nos viene con un query
    const { query } = req.query;

    res.status(200).json({
        data: productMocks,
        message: "products listed"
    })
})

router.get("/:productId", function(req, res) {
    //desestructurando la variable y sancandolo de request params.
    const { productId } = req.params;

    res.status(200).json({
        data: productMocks,
        message: "products retirieved"
    })
})

router.post("/", function(req, res) {

    // El post responde con un 201
    res.status(201).json({
        data: productMocks[0],
        message: "products listed"
    })
})

router.put("/:productId", function(req, res) {
    
    
    res.status(200).json({
        data: productMocks,
        message: "products updated"
    })
})

router.delete("/:productId", function(req, res) {
    
    
    res.status(200).json({
        data: productMocks[0],
        message: "products delete"
    })
})

module.exports = router;
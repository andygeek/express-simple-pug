const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

const productsService = new ProductsService();

// Se dice Mock a los datos hardcodeados.
router.get("/", async function (req, res) {
  // Cuando la url nos viene con un query
  const { tags } = req.query;
  try {
    const products = await productsService.getProducts({ tags });

    res.status(200).json({
      data: products,
      message: "products listed",
    });
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async function (req, res) {
  //desestructurando la variable y sancandolo de request params.
  const { productId } = req.params;

  try {
    const product = await productsService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: "products retirieved",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", async function (req, res) {
  // Esto gracias al destructuring
  const { body: product } = req;

  try {
    const createdProduct = await productsService.createProduct({ product });
    // El post responde con un 201
    res.status(201).json({
      data: createdProduct,
      message: "products listed",
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:productId", async function (req, res) {
  const { productId } = req.params;
  const { body: product } = req;

  try {
    const product = await productsService.updateProduct({ productId, product });
    res.status(200).json({
      data: product,
      message: "products updated",
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async function (req, res) {
  const { productId } = req.params;

  try {
    const updateProduct = await productsService.deleteProduct({ productId });
    res.status(200).json({
      data: updateProduct,
      message: "products delete",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;

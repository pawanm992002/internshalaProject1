const express = require("express");

const router = new express.Router();
const Product = require("../models/products");

// create a product
router.post("/addProduct", async (req, res) => {
  let ProductInfo = {
    name: "product 2",
    price: 100,
    description: "this is product 2 information",
  };
  // ProductInfo is dynamically taken by frontend
  try {
    const newProduct = new Product(ProductInfo);
    await newProduct.save();
    res.status(201).send("succefull added");
  } catch (e) {
    res.status(400);
    res.send("something went wrong");
  }
});

// retrive all products
router.get("/getProducts", async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products);
    res.send(products);
  } catch (e) {
    res.status(400);
    res.send("something went wrong");
  }
});

// retrive product by product name
router.get("/getProduct", async (req, res) => {
  let productName = "product 1";
  // productName is taken by front end in form of parameter or request body
  try {
    if (productName === "") res.send("please enter correct product name");
    else {
      const product = await Product.findOne({ name: productName });
      if (!product) res.send("product not found with this name");
      else res.send(product);
    }
  } catch (e) {
    res.status(400);
    res.send("something went wrong");
  }
});

// update product description and price by product name
router.get("/updateProduct", async (req, res) => {
  let productName = "product 1";
  // productName is taken by front end in form of parameter or request body
  try {
    if (productName === "") res.send("please enter correct product name");
    else {
      const product = await Product.findOne({ name: productName });
      if (!product) res.send("product not found with this name");
      else {
        let updatedProduct = {
          price: 80,
          description: "this is modified product 1",
        };
        // updatedProducct is taken by front end in form of parameter or request body
        await product.updateOne(updatedProduct);
        res.send("product updated successfully");
      }
    }
  } catch (e) {
    res.status(400);
    res.send("something went wrong");
  }
});

module.exports = router;

const mongooes = require("mongoose");

const productSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

const Product = new mongooes.model("Product", productSchema);

module.exports = Product;

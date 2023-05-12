const express = require("express");
const app = express();
const PORT = 8056;

require("./db/conn");
app.use(express.json());

const ProductRoute = require("./router/product");
app.use(ProductRoute);

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(PORT, () => {
  console.log("running server....");
});

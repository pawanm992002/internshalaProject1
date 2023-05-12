const mongooes = require("mongoose");

mongooes
  .connect("mongodb://localhost:27017/internshala")
  .then(() => {
    console.log("connection is successfull");
  })
  .catch((e) => {
    console.log("connection is not successfull");
  });

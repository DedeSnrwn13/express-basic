const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

app.get("/", (req, res) => {
  const fruit = [{ name: "Apel" }, { name: "Jeruk" }, { name: "Pepaya" }];

  res.render("index", {
    name: "Doni",
    age: 10,
    fruit: fruit,
  });
});

app.get("/:name", (req, res) => {
  res.send(`Nama saya : ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

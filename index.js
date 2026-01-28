const e = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(3000,function (erro) {
  if (erro) {
    console.log("Ocorreu um erro ao iniciar o servidor.");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});


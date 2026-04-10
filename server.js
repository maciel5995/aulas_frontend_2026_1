
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/cadastro", (req, res) => {
  console.log("GET:", req.query);
  res.send("Dados recebidos via GET");
});

app.post("/cadastro", (req, res) => {
  console.log("POST:", req.body);
  res.send("Dados recebidos via POST");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});


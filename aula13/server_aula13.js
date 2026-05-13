const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const ARQUIVO = "produtos.json";

// FUNÇÃO PARA LER O JSON
function lerProdutos() {
  const dados = fs.readFileSync(ARQUIVO, "utf8");
  return JSON.parse(dados);
}

// FUNÇÃO PARA SALVAR O JSON
function salvarProdutos(produtos) {
  fs.writeFileSync(
    ARQUIVO,
    JSON.stringify(produtos, null, 2)
  );
}

// GET 
app.get("/produtos", (req, res) => {
  const produtos = lerProdutos();
  res.json(produtos);
});

// POST 
app.post("/produtos", (req, res) => {
  const produtos = lerProdutos();
  const novoProduto = {
    id: Date.now(),
    nome: req.body.nome
  };

  produtos.push(novoProduto);
  salvarProdutos(produtos);
  res.status(201).json(novoProduto);
});

// PUT
app.put("/produtos/:id", (req, res) => {

  const produtos = lerProdutos();
  const id = Number(req.params.id);
  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({
      erro: "Produto não encontrado"
    });
  }

  produto.nome = req.body.nome;
  salvarProdutos(produtos);
  res.json(produto);
});

// DELETE 
app.delete("/produtos/:id", (req, res) => {

  let produtos = lerProdutos();
  const id = Number(req.params.id);
  produtos = produtos.filter(p => p.id !== id);

  salvarProdutos(produtos);

  res.json({
    mensagem: "Produto removido"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
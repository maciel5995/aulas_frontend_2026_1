const API = "http://localhost:3000/produtos";

const lista = document.getElementById("listaProdutos");

const form = document.getElementById("formProduto");

const inputNome = document.getElementById("nome");

let editandoId = null;



// LISTAR PRODUTOS
async function carregarProdutos() {
  const resposta = await fetch(API);
  const produtos = await resposta.json();
  lista.innerHTML = "";

  produtos.forEach(produto => {
    const li = document.createElement("li");
    li.classList.add("item-lista");
    li.innerHTML = `
      <span class="nome-produto">${produto.nome}</span>
      <span class="actions">
        <button
          class="editar"
          onclick="editarProduto(${produto.id}, \`${produto.nome}\`)">
          Editar
        </button>

        <button
          class="excluir"
          onclick="deletarProduto(${produto.id})">
          Excluir
        </button>
      </span>
    `;
    lista.appendChild(li);
  });
}


// ADICIONAR / EDITAR
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = inputNome.value;
  // EDITAR
  if (editandoId) {
    await fetch(`${API}/${editandoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome })
    });
    editandoId = null;
  } else {
    // ADICIONAR
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nome })
    });
  }
  form.reset();
  carregarProdutos();
});

// EDITAR
function editarProduto(id, nome) {
  inputNome.value = nome;
  editandoId = id;
}



// DELETAR
async function deletarProduto(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  carregarProdutos();
}

carregarProdutos();
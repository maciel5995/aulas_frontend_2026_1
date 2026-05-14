const API = "http://localhost:3000/produtos";
const lista = document.getElementById("listaProdutos");
const form = document.getElementById("formProduto");
const inputNome = document.getElementById("nome");
let editandoId = null;


/* ================================= */
/* VIA CEP */
/* ================================= */

const inputCep = document.getElementById("cep");
const btnBuscarCep = document.getElementById("btnBuscarCep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

// BUSCAR CEP
async function buscarCep() {
  const cep = inputCep.value
    .replace("-", "")
    .trim();

  // VALIDAÇÃO SIMPLES
  if (cep.length !== 8) {
    alert("CEP inválido");
    return;
  }
  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados =await resposta.json();
    // CEP NÃO ENCONTRADO
    if (dados.erro) {
      alert("CEP não encontrado");
      return;
    }

    rua.innerText = dados.logradouro;
    bairro.innerText = dados.bairro; 
    cidade.innerText = dados.localidade;
    estado.innerText = dados.uf;
  } catch (erro) {
    console.error(erro);
    alert("Erro ao consultar API");
  }
}

// EVENTO BOTÃO
btnBuscarCep.addEventListener("click",buscarCep);

/* ================================= */
/* CRUD */
/* ================================= */

// LISTAR PRODUTOS
async function carregarProdutos() {
  const resposta = await fetch(API);
  const produtos = await resposta.json();
  lista.innerHTML = "";
  produtos.forEach(produto => {
    const li = document.createElement("li");
    li.classList.add("item-lista");
    li.innerHTML = `
      <span class="nome-produto">
        ${produto.nome}
      </span>
      <span class="actions">
        <button
          class="editar"
          onclick="editarProduto(${produto.id},\`${produto.nome}\`)">
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
form.addEventListener("submit",
  async (e) => {
    e.preventDefault();
    const nome = inputNome.value;

    // EDITAR
    if (editandoId) {
      await fetch(`${API}/${editandoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify({nome})
        }
      );
      editandoId = null;
    } else {
      // ADICIONAR
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({nome})
      });
    }
    form.reset();
    carregarProdutos();
  }
);

// EDITAR
function editarProduto(id, nome) {
  inputNome.value = nome;
  editandoId = id;
}

// DELETAR
async function deletarProduto(id) {
  await fetch(`${API}/${id}`,
    {
      method: "DELETE"
    }
  );
  carregarProdutos();
}


// INICIALIZA
carregarProdutos();
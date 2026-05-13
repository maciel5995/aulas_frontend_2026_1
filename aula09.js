console.log('hello world outra vez')

console.log(`A soma entre 5 e 10 é: ${5 + 10}`) // interpolação

console.log(9 == "9") // true
console.log(9 === "9") // false
console.log(9 != "9") // false
console.log(9 !== "9") //true

var nome = "Rodrigo"
console.log(nome)

let idade = 45
console.log(idade)

const a = 2, b = 3, c = 4 // declaração múltipla
console.log(a, b, c)
// a = 3 // NÃO PODE!
// console.log(a)

const user = "Rodrigo"
if(user === "Rodrigo"){
    console.log(`Bem vindo ${user}`)
}

const logado = false;
if(logado){
    console.log('Usuário autenticado')
} else {
    console.log('Usuário não autenticado')
}

const m = 3, n = 2
if(m > n) {
    console.log('m é maior que n')
} else if(m < n) {
    console.log('m é menor que n')
} else {
    console.log('m é igual a n')
}

logado ? console.log("Autenticado") : console.log("Não autenticado")

const curso = "S";
switch (curso) {
    case "SW":
        console.log("Você é um aluno de Engenharia de Software");
        break;
    case "ENC":
        console.log("Você é um aluno de Engenharia de Computação");
        break;
    case "EE":
        console.log("Você é um aluno de Engenharia Elétrica");
        break;
    default:
    console.log("Curso não encontrado");
}

let i = 0;
while(i < 5) {
    console.log(i+1);
    i++;
}

do {
    console.log(i+1);
    i++;
} while(i < 5)

for(let i = 0; i < 5; i++){
    console.log('for: ', i+1);
}

for(let i = 0; i < 5; i++){
    console.log('for: ', i+1);
    if(i == 1) {
        break;
    };
}

for(let i = 0; i < 5; i++){    
    if(i == 1) {
        continue;
    };
    console.log('for: ', i);
}


// função sem parâmetro e sem retorno
function myFunction(){
    console.log("myFunction");
}

myFunction();

const myArrowFunction = () => {
    console.log("myArrowFunction");
}

myArrowFunction();

// função com passagem de parâmetro e com retorno
const defineParOuImpar = (numero) => {
    // if(numero % 2 === 0) {
    //     return "PAR";
    // } else {
    //     return "IMPAR";
    // }
    return numero % 2 === 0 ? "PAR" : "IMPAR";
}

console.log(defineParOuImpar(2))

let names = ['rodrigo', 'maria'];

names.push('joão', 'pedro', 'ana'); // adicionando no final
console.log(names);
names.pop();
console.log(names);
const filteredNames = names.filter((name) => name.length > 4);
console.log('filteredNames: ', filteredNames)
const found = names.find((name) => name.length >= 3);
console.log('found: ', found)
const foundIndex = names.findIndex((name) => name.length === 5);
console.log('foundIndex: ', foundIndex)

for( let i = 0; i < names.length; i++ ) {
    console.log(names[i])
}
names.forEach((name) => console.log(name))
names.map((name) => console.log(name))
names.forEach((name) => {
    if(name.length >= 5) {
    console.log(name);
    }
});

//objetos
const aluno = {
    nome: "João",
    idade: 21,
    curso: "Programador",
};
    // acesso aos atributos
console.log("objeto:")
console.log(aluno.nome);
console.log(aluno.nome.length);
console.log(aluno.idade);
console.log(aluno.curso);


class Pessoa {
    constructor(nome, sobrenome, cidade, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cidade = cidade;
    this.email = email;
    }
    mostraDados() {
    console.log(`Nome: ${this.nome} ${this.sobrenome}\nCidade: ${this.cidade}\nE-mail: ${this.email}`);
    }
    }
    const pessoa = new Pessoa('Rodrigo', 'Maciel', 'Araranguá', 'rodrigo@email.com');
    console.log(pessoa)
    pessoa.mostraDados()
//Arrays e objetos
//Array (pode ser chamado de vetor ou lista)
//Lista de produtos
let produtos = [];
console.log(typeof produtos);

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"];
console.log(Produtos);

//Exibindo os itens individualmente (pelos índices)
console.log(Produtos[0]);
console.log(Produtos[1]);
console.log(Produtos[2]);
console.log(Produtos[3]);

//De forma mais caprichada
console.log(`1 - ${Produtos[0]}`);
console.log(`2 - ${Produtos[1]}`);
console.log(`3 - ${Produtos[2]}`);
console.log(`4 - ${Produtos[3]}`);

console.log("Exibindo s lista através do FOR...");
for (let c in Produtos) {
  console.log(`${Number(c)} - ${Produtos[c]}`); //c representa o índice
}

console.log("Exibindo a lista atraves do forEach");
Produtos.forEach(function (produto) {
  console.log(produto);
});

console.log("Exibindo a lista atraves do forEach com os índices...");
Produtos.forEach((produto, i) => {
  //i representa o índice
  console.log(`${i + 1} - ${produto}`);
});

//Métodos de manipulação de vetores
let vetor = ["laranja", "maçã", "Banana"];
console.log(`NOsso vetor é o: ${vetor}`);
vetor[3] = "Morango"; //risco de sobrescrever algum elemento existente
console.log(`Nosso vetor agora é o: ${vetor}`);

//Metodo push: insere um novo elemento no final do vetor
vetor.push("Abacaxi");
console.log(`Nosso vetor agora é: ${vetor}`);

//Metodo unshift: insere um novo elemento no inicio do vetor
vetor[0] = "Pera";
console.log(`NOsso vetor agora é o: ${vetor}`);
vetor.unshift("Laranja");
console.log(`Nosso vetor agora é o: ${vetor}`);

//Metodo Lenght - retorna o número de elementos do vetor
//Quando fizer um select e quiser verificar se a lista está vazia ou não
//Este método conta a quantidade de elementos do vetor
let numeros = [6, 8, 2, 9, 3];
console.log(`NOssa lista de números é: ${numeros}`);
console.log(`O numero de elementos do vetor é ${numeros.length}`);

// Metodo SORT - Ordenar o vetor
console.log(`O primeiro elemento da lista de frutas é: ${vetor[0]}`);
vetor.sort();
console.log(`Agora o primeiro elemento da lista de frutas é: ${vetor[0]}`);
console.log(`Nossa lista de frutas ordenada é: ${vetor}`);

// Ordenação de números com o SORT
console.log(`Nossa lista de números é: ${numeros}`);
numeros.sort((a, b) => a - b);
console.log(`Agora nossa lista de números ordenada é: ${numeros}`);

// Ordenação de forma crescente
console.log(numeros);

//////////////////////////////////////////////
//Obejtos literais (não são derivados de classes)
//Objetos possuem Atributos (características) e metodos (ações)
//Lado esquerdo: chaves / Lado direito: valores
const pessoa = {};
console.log(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    console.log("Acelerando...");
  },
};

console.log(`O modelo do carro é ${carro.modelo}`)
console.log(`A cor do carro é ${carro.cor}`)
carro.acelerar()

//////////////////////////////////////////
const produto = {
    nome: "Computador",
    marca: "Lenovo",
    preço: 3000,
    descricao: "PC moderno com bom desempenho.",
}
console.log(produto);
console.log(`O ${produto.nome} da marca ${produto.marca} custa apenas R$ ${produto.preco}, ${produto.descricao}`)

//////////////////////////////////////////////////
//Array de objetos
const listaProdutos = [{
    nome: "Computador",
    marca: "Lenovo",
    preco: 3000,
    descricao: "PC moderno com bom desempenho"
},
{
    nome: "Tablet",
    marca: "Samsung",
    preco: 2000,
    descricao: "Ótima velocidade de processamento"
},
{
    nome: "Celular",
    marca: "Apple",
    preco: 12000,
    descricao: "Ultra resistente. Muito barato!"
},
];

//Exibindo o Array de objetos com ForEach:
listaProdutos.forEach(produto => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Produto: ${produto.marca}`)
    console.log(`Produto: ${produto.preco}`)
    console.log(`Produto: ${produto.descricao}`)
    console.log() //vazio para pular linha
})

//Exibição em tabela
console.table(listaProdutos)
//Importando o pacote do Express.js
const express = require("express")
//Carregando o método principal do Express
const app = express() //Iniciando o Express

//CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine','ejs')

//CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTATICOS
app.use(express.static('public'))

//Criando a rota principal (raiz) do site
//Método .get cria uma rota dentro da aplicação
//REQ trata a requisição do usuário e RES trata a resposta
app.get("/", (req,res) => {
    res.render("index");
});

//Rota de perfil
// :nome -> parametro obrigatório
// :nome? -> parametro opcional
app.get("/perfil", (req,res)=> {
    res.render("perfil")
});

//Rota de produtos
app.get("/produtos/:produto?", (req,res) => {
    //coletando o parametro da rota
    const produto = req.params.produto

//Array com lista de produtos
const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']

    res.render("produtos", {
        //Enviando a variavel produto para a pagina
        produto : produto, //produto da esquerda é a variável que é chamada na página; do lado direito é o seu valor
        produtos : produtos //enviando variáveis para a página
    });
});

// Iniciando o servidor da aplicação (dentro da própria aplicação) na Porta 8080
//O método listen do Express inicia um servidor
app.listen(8081, function(error){
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor" + error)
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})


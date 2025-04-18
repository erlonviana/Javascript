//Importando o pacote do Express.js
const express = require("express")
//Carregando o método principal do Express
const app = express() //Iniciando o Express

//CONFIGURANDO A VIEW ENGINE - EJS
app.set('view engine','ejs')

//Criando a rota principal (raiz) do site
//Método .get cria uma rota dentro da aplicação
//REQ trata a requisição do usuário e RES trata a resposta
app.get("/", function(req,res){
    res.send("<h1>Bem-vindo ao meu primeiro site em Node.js!</h1><br><p> Iniciando estudos com Node.JS</p>");
});

//Rota de perfil
// :nome -> parametro obrigatório
// :nome? -> parametro opcional
app.get("/perfil/:nome?", function(req,res){
    // res.send("<h1>Perfil do usuábjwisvwiusvgiuwsrio!</h1>")

    //Coletando o parametro da rota (url) e gravando na variável
    const nome = req.params.nome;
    if(nome){
        res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
    }else{
        res.send(`<h2> Faça login para acessar o seu perfil!</h2>`)
    }
});

//Rota de produtos
app.get("/produtos", (req,res) => {
    res.render("produtos")
}
)

// Iniciando o servidor da aplicação (dentro da própria aplicação) na Porta 8080
//O método listen do Express inicia um servidor
app.listen(8081, function(error){
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor" + error)
    } else {
        console.log("Servidor iniciado com sucesso");
    }
})


import express from "express"

 //Carregando o método do express para gerenciamento de Rotas
const router = express.Router() //router é o objeto para criar as rotas

//Rota de produtos
router.get("/produtos/", (req,res) => { 
    //coletando o parametro da rota

//Array com lista de produtos
const produtos = [
    //array de objetos
    {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
    {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos"},
    {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
    {nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos"}, 
];

    res.render("produtos", {
        //Enviando a variavel produto para a pagina
        produtos : produtos //enviando variáveis para a página
    });
});

//Exportando o módulo
export default router; //se for exportar mais de um objeto, utilizar chaves {}
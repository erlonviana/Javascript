//Arrays
//1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach.
// Os índices do vetor também devem ser exibidos.
let vetor = ["Acre (AC)", "Alagoas(AL)", "Amapá (AP)", "Amazonas (AM)", "Bahia (BA)", "Ceará (CE)", "Distrito Federal (DF)", "Espírito Santo (ES)", "Goiás (GO)", "Maranhão (MA)", "Mato Grosso (MT)",
"Mato Grosso do Sul (MS)", "Minas Gerais (MG)", "Pará (PA)", "Paraíba (PB)", "Paraná (PR)", "Pernambuco (PE)", "Piauí (PI)", "Rio de Janeiro (RJ)", "Rio Grande do Norte (RN)",
    "Rio Grande do Sul (RS)", "Rondônia (RO)", "Roraima (RR)", "Santa Catarina (SC)", "São Paulo (SP)", "Sergipe (SE)", "Tocantins (TO)"];

console.log("Exibindo a lista atraves do forEach com os índices...");
    vetor.forEach((vetor, i) => {
      //i representa o índice
      console.log(`${i + 1} - ${vetor}`);
    });
    console.log(`\n`) //vazio para pular linha
//Objetos literais
//2 – Crie um objeto literal para descrever você.
//Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida.
// Em seguida, exiba as chaves e valores na tela.

const erlon = {
    nome: "Érlon Viana dos Santos",
    idade: "35",
    cidade: "Registro/SP",
    hobby: "Tocar violão",
    música_preferida: "Fade to black",
  };

  console.log(erlon)
  console.log(`\n`) //vazio para pular linha
//Array de objetos
//3 – Crie um array de objetos de filmes com no mínimo 5 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo,
// título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach. 

const filmes = [{
    título: "Joker",
    gênero: "suspense",
    ano: 2019,
    classificação: "16 anos"
},
{
  título: "Bacurau",
  gênero: "drama",
  ano: 2019,
  classificação: "18 anos"
},
{
  título: "Parasita",
  gênero: "suspense",
  ano: 2019,
  classificação: "18 anos"
},
{
  título: "Green book",
  gênero: "comédia dramática",
  ano: 2018,
  classificação: "12 anos"
},
{
  título: "A origem",
  gênero: "ficção",
  ano: 2010,
  classificação: "livre"
}]

//Exibindo o Array de objetos com ForEach:
filmes.forEach(filme => {
  console.log(`Título: ${filme.título}`)
  console.log(`Gênero: ${filme.gênero}`)
  console.log(`Ano: ${filme.ano}`)
  console.log(`Classificação: ${filme.classificação}`)
  console.log(`\n`) //vazio para pular linha
})


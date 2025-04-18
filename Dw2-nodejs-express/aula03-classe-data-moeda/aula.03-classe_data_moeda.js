//CLasse, data e moeda
//Classes no Javascript

class Carro {
  //nome de classes devem iniciar com a primeira letra maiúscula
  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}


//Criando uma instância (objeto) da classe carro
const carroPopular = new Carro("Fiat", "Uno", "2012")
//Console log para exibir
console.log(`O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e faz ${carroPopular.buzinar()}` )

//Instância carroEsportivo (sem nenhuma característica)
const carroEsportivo = new Carro()
//Atribuindo o valor depois
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = "2024"

//Console log para exibir
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e faz ${carroEsportivo.buzinar()}` )

//É possível que a instância criada tenha mais atributos/métodos do que a classe que ele está vinculado
//Adicionando um novo atributo
carroEsportivo.corNeon = "Azul"

//Adicionando um novo método
carroEsportivo.turbo = function(){
    return "Vrummm! O carro está acelerando!"
}
//Exibindo
console.log(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem neon da cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`)
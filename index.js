var sobrenome; // strings
var idade; // inetiros
var maiorIdade; // boolean
var peso; //number
var fichaCriminal; // object
var listaDeNomesSuspeitos, valoresEstimados,listaDeCarrosSuspeitos; // array

const nome = "Rafael"; // constante não pode ser alterada
sobrenome = "da Silva";
idade = 38;
maiorIdade = true;
peso = 89.5;

// object abaixo exemplo
// mudando nome de ususário
// nome = 'Taís';
idade = 35;

fichaCriminal = {
  nome,
  sobrenome,
  idade,
  maiorIdade,
  peso,
  corDoCabelo: "Preto"
}

// Array se inicia com colchets
listaDeNomesSuspeitos = [
  'Joao', 'Marcos', 'Pedro','Luis'
]

valoresEstimados = [
  123.456, 786.990, 12, 889.001, 000122
]

listaDeCarrosSuspeitos = [
  {
    placa: 'ASM8961',
    modelo: 'Renegade'
  },
  {
    placa: 'ABC0987',
    modelo:'Polo'
  },
  {
    placa: 'QQW9631',
    modelo: 'Lamborgni'
  }
]

console.log("Nome do usuário:", nome)
console.log("Sobrenome do usuário:", sobrenome)
console.log("Idade usuário:", idade, "Anos")
console.log("O usuário é maior de idade:", maiorIdade)
console.log("Qual peso em Kg do usuário:", peso, "kg")
console.log("******************************************")
console.log("Ficha Criminal:");
console.log(fichaCriminal);
console.log("******************************************");
console.log("Lista de Suspeitos");
console.log(listaDeNomesSuspeitos);
console.log("******************************************");
console.log("Possível valores de Perda");
console.log(valoresEstimados);
console.log("******************************************");
console.log("Possível Carro Suspeito");
console.log(listaDeCarrosSuspeitos);

// inserir comentáros usar duas barras //

// para redefinir um valor exemplo nome

// iniciar aula 02 Js  com esse link => https://www.youtube.com/watch?v=YvDdlUv-ZdY

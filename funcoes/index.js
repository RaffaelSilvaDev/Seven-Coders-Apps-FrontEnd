// function

function calculaImc(peso, altura) {
  var imc = (peso / (altura * altura));
  return imc;
}
var pessoa1 = {
  peso: 80,
  altura: 2.0,
}
var pessoa2 = {
  peso: 50,
  altura: 1.5,
}

var imcPessoa1 = calculaImc(pessoa1.peso, pessoa1.altura);
var imcPessoa2 = calculaImc(pessoa2.peso, pessoa2.altura);

console.log("IMC 1:", imcPessoa1);
console.log("IMC 2:", imcPessoa2);


// arrow function utilizando ``

calcularMedia = (n1, n2) => {
  var media = ((n1 + n2) / 2)
  return media
}

var x = 12;
var y = 30;
var resultado = calcularMedia(x, y);

console.log(`Média dos valores: ${x} e ${y} = ${resultado}`); // entre crase ``

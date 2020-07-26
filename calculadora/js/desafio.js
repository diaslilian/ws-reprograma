var inputValorHora = document.querySelector("#valor-hora");
var inputHoras = document.querySelector("#horas-projeto");
var saida = document.querySelector("#resposta");

function calcular() {
  var valorHora = inputValorHora.valueAsNumber;

  var horasProjeto = inputHoras.valueAsNumber;

  var valorTotal = valorHora * horasProjeto;

  var valorDuasCasas = valorTotal.toFixed(2);
  saida.textContent = "R$ " + valorDuasCasas;
}

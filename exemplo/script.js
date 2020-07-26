console.log("Hello World!");

var entrada = document.querySelector("#ano");

var saida = document.querySelector("#respostaAno");

function cliquei() {
  var ano = entrada.value;

  saida.textContent = ano;
}

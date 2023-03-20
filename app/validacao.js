function verificaSeOChutePossuiUmValorValido(chute) {
  // transformar string em inteiro apenas somando
  const numero = +chute;

  // verificar se o número é inválido
  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += '<div>Valor inválido</div>';
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>`

  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`

  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

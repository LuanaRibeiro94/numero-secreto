const elementoChute = document.getElementById('chute');

// Configuração de reconhecimento de voz ativa quando a aplicação iniciar - usando Web Speech API
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// criando uma instância
const recognition = new SpeechRecognition();

// definir a linguagem em português
recognition.lang = 'pt-Br';
// iniciar o reconhecimento de voz
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela() {
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

// Quando acabar o evento, iniciar novamente
recognition.addEventListener('end', () => recognition.start());
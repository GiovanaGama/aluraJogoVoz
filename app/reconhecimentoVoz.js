window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const saidaFront = document.getElementById('chute')

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', (evento) => {
    const numeroFalado = evento.results[0][0]['transcript']
    const numeroCorrigidoBug = corrigeNumero(numeroFalado)
    criarElementoFront(numeroCorrigidoBug)
    verificaChute(numeroCorrigidoBug)
})

function criarElementoFront(num) {
    saidaFront.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${num}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
const numeros = {
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
 }

function corrigeNumero(palavra) {
    for (elemento in numeros){
        if (palavra === elemento){
            palavra = numeros[elemento]
        }
    }
    return palavra
}


function verificaChute(num) {
    const numero = +num

    if (numero === numeroSecreto ) {
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="reset">Reiniciar</button>
        `
        const botao = document.getElementById('reset')
        botao.addEventListener('click', () => {
            window.location.reload()
        })
    } else if (num == 'game over' || num == 'Game over'){
        document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <button id="reset">Reiniciar</button>
        `

        const botao = document.getElementById('reset')
        botao.addEventListener('click', () => {
            window.location.reload()
        })

        document.body.style.backgroundColor = 'red'
        botao.style.fontSize = '1.5em'
        botao.style.margin = '1.5em'
    } else {
        if (Number.isNaN(numero)) {
            if (corrigeNumero(num))
            saidaFront.innerHTML += '<div>Número inválido</div>'
        } else {
            if (numero > maiorValor || numero < menorValor) {
                saidaFront.innerHTML += `<div>Número inválido. Fale um número entre ${menorValor} e ${maiorValor}</div>`
        } else {
            maiorOuMenor(numero)
        }
    }
    }

    
}

function maiorOuMenor (num) {
    if (num < numeroSecreto) {
        saidaFront.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>
        `
    } else {
        saidaFront.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>
        `
    }

}
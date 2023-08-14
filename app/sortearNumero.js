const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumero()

function gerarNumero() {
    return parseInt(Math.random() * (maiorValor + 1))
}


let alterarMenor = document.getElementById('menor-valor')
let alterarMaior = document.getElementById('maior-valor')

alterarMenor.innerText = menorValor
alterarMaior.innerText = maiorValor

console.log(numeroSecreto)
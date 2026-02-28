function geraNumero(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// precisa ser let para alterar para jogar novamente a cada acerto
let numero = geraNumero(1, 100)

// escutar o click do botao submete 
const botao = document.querySelector('.submete')

// evento do click, seleciona os id e classes necessarios
botao.addEventListener("click", function () {
    const palpite = document.getElementById('number')
    // converte valor passado no input para int
    const palpite1 = parseInt(palpite.value)
    const resultado = document.getElementById('mensagem')

    // verifica se palpite é numero (apenas confirmação)
    if (isNaN(palpite1)) {
        resultado.textContent = "Digite um valor valido"
        return
    }


    if (palpite1 < 1 || palpite1 > 100){
        resultado.textContent = "Digite um valor no intervalo [1..100]"
        return
    }

    // verifica se o palpite é o numero gerado 
    if (palpite1 < numero) {
        resultado.textContent = "Palpite novamente, o seu número é menor"
        // limpa input a cada palpite errado
        palpite.value = ''
        // usado para imprimir com as cores corretas
        resultado.className = "errado"

    } else if (palpite1 > numero) {
        resultado.textContent = "Palpite novamente, o seu número é maior"
        // limpa input a cada palpite errado
        palpite.value = ''
        resultado.className = "errado"
    }else {
        resultado.textContent = "Acertou, Quer tentar novamente?"
        resultado.className = "acerto"

        // Limpa o input para o próximo palpite
        palpite.value = '';

        // Gera novo número para reiniciar o jogo
        numero = geraNumero(1, 100);
    }

    // usado para o css ser mostrando junto ao resultado
    resultado.style.display = "block"

})

// usando enter como click do botao
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        document.querySelector('.submete').click()
})
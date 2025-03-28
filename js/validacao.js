function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>valor invalido, fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou! &#x1F604;</h2>
        <h3> &#x261E; O número secreto era ${numeroSecreto} &#x261C; </h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        

    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    
    } else { (numero < numeroSecreto)
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    
    }


}



function verificaGameOver(chute){
    if (chute == gameOver){
        document.body.innerHTML = `
        <h1> GAME OVER! </h1>
        <h2>Ah, você desistiu? &#x1F622; </h2>
        <h3> &#x261E; O número secreto era ${numeroSecreto} &#x261C; </h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        document.body.classList.add('game-over')
        
    }
}


function chuteForInvalido(numero) {
    return Number.isNaN(numero);

}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}


document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});

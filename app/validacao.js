function verificaSeOValorPossuiUmValorValido(chute) {
    const numero = +chute;
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += '<div>valor inválido : numero secreto fora do range</div>';
        elementoChute.innerHTML += `<div>valor permitido esta entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!!!</h2>
            <h3> O Numero Secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar" >Jogar Novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O numero é menor <i class="fa-sharp fa-solid fa-arrows-down-to-line" style="color: #72FFFF;"></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>O numero é maior <i class="fa-sharp fa-solid fa-arrows-up-to-line" style="color: #72FFFF;"></i></div>
        `;
    }
    function chuteForInvalido(numero) {
        return Number.isNaN(numero);
    }

    function numeroForMaiorOuMenorQueOValorPermitido(numero) {
        return numero > maiorValor || numero < menorValor;
    }
}
document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
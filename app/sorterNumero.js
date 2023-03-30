const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroSecreto();

//utiliza + 1 porque ultimo numero nao inclusivo

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1);
}
console.log("numero Secreto:", numeroSecreto);

//manipulando elemento no html trocando valores correspondentes as constantes
const elementoMenorValor = document.getElementById("menor-valor");
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
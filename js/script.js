// console.log('script via body', document.getElementById('n1'))

function somar() {
    // Pegar os números dos inputs do HTML e converter para Float, pois será possível o cálculo inteiro
    // e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);
    let resultado_somar = numero1 + numero2;
    

    console.log(resultado_somar);


    // exibindo o resultado da div resultado através da prop innerHTML
    let conteudo_da_div = document.getElementsByClassName('resultado_somar')[0];
    conteudo_da_div.innerHTML = resultado_somar
}

function subtrair() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);
    let resultado_subtrair = numero1 - numero2;

    console.log(resultado_subtrair);

    let conteudo_da_div = document.getElementsByClassName('resultado_subtrair')[0];
    conteudo_da_div.innerHTML = resultado_subtrair
}

function multiplicar() {
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);
    let resultado_multiplicar = numero1 * numero2;


    console.log(resultado_multiplicar);

    let conteudo_da_div = document.getElementsByClassName('resultado_multiplicar')[0];
    conteudo_da_div.innerHTML = resultado_multiplicar
}

function dividir() {
    let numero1 = parseFloat(document.getElementsByClassName('n1').value);
    let numero2 = parseFloat(document.getElementsByClassName('n2').value);
    resultado_dividir = numero1/numero2;


    console.log(resultado_dividir);

    let conteudo_da_div = document.getElementsByClassName('resultado_dividir')[0];
    conteudo_da_div.innerHTML = resultado_dividir
}
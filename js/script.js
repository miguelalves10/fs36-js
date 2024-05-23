// console.log('script via body', document.getElementById('n1'))

function soma() {
    // Pegar os números dos inputs do HTML e converter para Float, pois será possível o cálculo inteiro
    // e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = numero1 + numero2;
    
    console.log(resultado);
}
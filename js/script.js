const numero1 = (document.getElementById('n1'));
const numero2 = (document.getElementById('n2'));
const conteudo_da_div = document.querySelector('.resultado')

function somar() {
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    mostrar_resultado(resultado)
}

function subtrair() {
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    mostrar_resultado(resultado)
}

function multiplicar() {
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    mostrar_resultado(resultado)
}

function dividir() {
    let resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
    mostrar_resultado(resultado)
}

function mostrar_resultado(resultado_parametro) {
    conteudo_da_div.innerHTML = 'Resultado: ' + resultado_parametro

}

function limpar() {
    conteudo_da_div.style.display = 'none'
// codigo para limpar o que digitei
    // numero1.value = '';
    // numero2.value = '';
    // conteudo_da_div.innerHTML = '';
    conteudo_da_div.innerHTML = 'Resultado: ';
}
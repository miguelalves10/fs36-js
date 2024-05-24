/* 
Objetivo: calcular a média de 2 números
    1- Pegar os 2 números
    2- Somar os 2 números
    3- Dividir a soma pela quantidade de números
*/


let n1 = 100;
let n2 = 900;

// O resultado de soma é diferente do resultado de media
function soma() {
    let resultado = n1 + n2;
    return resultado;
}

function media() {
    let resultado = soma() / 2;
    return resultado;
    
}

console.log(media());

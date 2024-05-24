/* 
Objetivo: calcular a média de 2 números
    1- Pegar os 2 números
    2- Somar os 2 números
    3- Dividir a soma pela quantidade de números
*/


// let n1 = 100;
// let n2 = 900;

function soma(n1, n2) {
    return n1+n2
}


function media() {
    console.log(soma()/ 2);
    
}

media()


/* 
Objetivo: Calcular a média de quaisquer 2 números
*/

function media2numeros(n1, n2) {
    let resultado = soma(n1, n2) / 2;
    return resultado;
}

console.log(media2numeros(21410, 201841));

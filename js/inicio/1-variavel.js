// var, const, let

// 1 - Criando a variável e atribuindo o valor
// let nome = 'João';

/* DECLARAÇÃO DE VARIAVEL

1- Não pode ser palavra reservada
2- Não pode iniciar com número
3- Não pode iniciar com espaço vazio
4- Não pode conter caracteres especiais
5- Não pode iniciar com operador lógico
6- Não pode iniciar com operadores aritméticos
7- Não pode iniciar com operadores de comparação

*/

let banana = 'olá';
let nome5 = 'James';
let sobre_nome = 'Ferreira';
// CamelCase: inicia a 1a palavra em minúsculo e o restante das palavras inicia em maísculo
let sobreNome2 = 'Ferreira';

// let #idade = 12; // erro
let _idade = 12; // erro
let $idade = 12; // erro

// Alterando o valor
banana = 'Alterei o valor';
banana = 30;
console.log(banana);


// Criando uma constante
const alturaEverest = 8848;
// Atribuindo o valor da variável
alturaEverest = 10500;

// Imprimindo o valor da variável
console.log(alturaEverest);

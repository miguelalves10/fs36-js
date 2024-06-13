let idade = 21;

// = recebe
// == igual
// === estritamente igual, verifica o tipo e o valor
// >= ou <= maior ou igual; menor ou igual
// != diferente
// !== estritamente diferente
// && e
// || ou
// ! não

if (idade >= 18) {
    console.log('Maior idade');
} else if (idade <= 12 && idade > 3) {
    console.log('É criança');
} else if (idade <= 3) {
    console.log('É um bebê');
} else if (idade >= 13 && idade <= 17) {
    console.log('É um adolescente');
} else {
    console.log('Menor idade')
}
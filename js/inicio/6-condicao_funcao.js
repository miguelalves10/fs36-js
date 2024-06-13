// Testar 5 idades ao mesmo tempo, idades: 2, 12, 15, 18, 30

function verificarIdade(idade) {
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
}

verificarIdade(2);
verificarIdade(12);
verificarIdade(15);
verificarIdade(18);
verificarIdade(30);

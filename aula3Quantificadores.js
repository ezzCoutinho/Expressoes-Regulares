const {texto, arquivos} = require('./base');

// * (opicionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {minímo, máximo} pré define quantos irão ter
// {10,} no minímo
// {0, 10} no máximo

/* const regExp1 = /Jo+ão+/gi
console.log(texto.match(regExp1)); */

const regExp2 = /\.jpe{0,1}g/gi

for (const arquivo of arquivos) {
    const valido =  arquivo.match(regExp2);

    if(!valido) return;

    console.log(arquivo,valido);
}
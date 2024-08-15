// /expressão regular/ flag
// g - global (encontre todas as ocorrências)
// i - insensitive (a pesquisa será feita sem considerar as diferenças entre maiúsculas e minúsculas.)
// () - grupos (oq tiver dentro dos parenteses é um grupo)
// | - OR

const {texto} = require('./base');

const regExp1 = /(maria|joao|luiz)(, hoje sua esposa)/gi;
const found = regExp1.exec(texto);

if(found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
}

if(!found) {
    console.log('nada encontrado');
}

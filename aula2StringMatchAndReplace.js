// replace whit groups, $1 para o primeiro grupo.

const {texto} = require('./base');
const regExp1 = /João|maria/gi;

// console.log(texto.match(regExp1));
// console.log(texto.replace(/(João|Maria)/gi, '$1 Silva'));

console.log(texto.replace(/(João|Maria)/gi, function(input) {
    return `###########${input.toUpperCase()}###########`
}));

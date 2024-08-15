const {alfabeto} = require('./base')

// [abc] Conjunto. [^Aesquerda] -> negação.
// [min-max] Range.
// [\u] Unicode.
// \w All Expressão Regular.
// \W Negação de tudo.
// \d Todos os números.
// \D Nega todos os números.
// \s Acha todos os espaços.
// \S Nega todos os espaços.

console.log(alfabeto);
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-z0-9]+/gi)); // Negação.
console.log(alfabeto.match(/[a-z0-9\u00C0-\u00FF]+/gi)); // Unicode.
console.log(alfabeto.match(/[\u00A0-\u00BF]+/g)); // Unicode.
console.log(alfabeto.match(/\w+/g)); // Atalho all.
console.log(alfabeto.match(/\W/g)); // Atalho all.
console.log(alfabeto.match(/\d+/g)); // Atalho all.
console.log(alfabeto.match(/\D+/g)); // Atalho all.
console.log(alfabeto.match(/\s+/g)); // Atalho all.
console.log(alfabeto.match(/\S+/g)); // Atalho all.
const {lookahead} = require('./base');

console.log(lookahead);
// console.log(lookahead.match(/.+[^in]active$/gim));

// Positive lookahead (frases que tem active).
// console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookahead (frases que tem inactive).
// console.log(lookahead.match(/.+(?=inactive)/gim));

// Negative lookahead (frases que tem NÃO active).
// console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative lookahead (frases que tem NÃO inactive).
// console.log(lookahead.match(/^(?!.+inactive).+$/gim));

// Positive lookbehind (frases que tem ONLINE).
// console.log(lookahead.match(/(?<=online\s+)\S.*/gim));

// Positive lookbehind (frase que começam OFFLINE).
// console.log(lookahead.match(/(?<=offline\s+)\S.*/gim));

// Negative lookbehind (frases que NÃO começam ONLINE).
// console.log(lookahead.match(/^.+(?<!online.+)$/gim));

// Negative lookbehind (frases que NÃO começam OFFLINE).
// console.log(lookahead.match(/^.+(?<!offline.+)$/gim));

const cpf = `
012.250.796-10
111.111.111-11
888.888.888-88
147.285.963-10
aaa.bbb.ccc-d
`

console.log(cpf.match(/^(?!(\d)\1{2})[0-9\u002D-\u002E]+$/gm));

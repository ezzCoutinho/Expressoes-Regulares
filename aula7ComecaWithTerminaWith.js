const {cpfs2} = require('./base');

// ^ Começa com.
// [^ ] Negação.
// $ termina com.
// m multiline.

const cpf = '254.224.877-45';
const exCpfs = /^[0-9\u002D-\u002E]+$/gm;

console.log(cpfs2.match(exCpfs));
 
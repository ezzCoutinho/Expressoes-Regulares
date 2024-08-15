const {texto, arquivos, html} = require('./base');

// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// <.+>.+<\/.+>

const regExp3 = /<.+>.+<\/.+>/g; // comportamento GREEDY

const regExp4 = /<.+?>.+?<\/.+?>/g; // comportamento non-greedy

const regExp5 = /<.{0,1}>.{0,1}<\/.{0,1}>/g; // comportamento non-greedy

console.log(html.match(regExp4));

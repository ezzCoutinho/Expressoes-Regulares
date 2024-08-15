const {cpfs, ips} = require('./base');

const exCpfs = /[0-9\u002D-\u002E]+/gm;
const exIps = /[\d\u002E]+/g;

const professor = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(cpfs.match(exCpfs));
console.log(ips.match(exIps));

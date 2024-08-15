// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/gmi;

// Só números
const soNumerosRegEx =  /\D/;

// Valida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2})/g;

// Valida Número de Telefone
const telefoneRegExp = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})\-(\d{4})$/gm;

// Validar senhas fortes
const senhaForteRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]]).{8.}$/gm;

// Validar e-mails
const validaEmailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm;
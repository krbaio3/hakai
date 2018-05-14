let metadatos = require('./build/builder').METADATOS;
let loaders = require('./build/utils').ngcWebpackSetup(false, metadatos);

console.log(loaders);

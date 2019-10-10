const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 2;
let argv = process.argv;
let parametro = argv[2];
console.log(parametro);
crearArchivo(parametro).then(archivo => console.log(`Archivo creado ${archivo}`));
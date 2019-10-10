var colors = require('colors');

const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar')
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado ${archivo}`));
        break;
    default:
        console.log('comanando no reconocido');
        console.log('hello'.green); // outputs green text
}
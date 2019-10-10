const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo de texto con la tabla de mutliplicar', opt)
    .help()
    .argv;


module.exports = {
    argv
}
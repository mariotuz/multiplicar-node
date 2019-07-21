const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola', opts)
    .command('crear', 'genera un archivo con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}
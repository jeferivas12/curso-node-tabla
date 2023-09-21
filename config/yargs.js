const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'cantidad de lineas de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consoñla'
    })
    .check((argv) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;
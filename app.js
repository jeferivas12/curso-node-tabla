const crearArchivo = require('./helpers/multiplicar');
const argv = require('./config/yargs.js')
require('colors')
console.clear();

crearArchivo(argv.b, argv.l, argv.h )
    .then(nombre => console.log(`${nombre}.green Creado`))
    .catch(err => console.log(err))

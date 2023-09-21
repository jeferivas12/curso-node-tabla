const fs = require('fs');
const crearArchivo = async(base=1, listar, hasta) => {
    try {
        
        let tabla = "";
        for (let i=1;i<=hasta;i++)
        {
            tabla += `${base} x ${i} = ${base*i}\n`;
        }
        if (listar) {
            console.log("===================");
            console.log(`   Tabla del: ${base}`);
            console.log("===================");
            console.log(tabla);}

        fs.writeFileSync(`salidas/tabla-${base}.txt`, tabla);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}
module.exports = crearArchivo;
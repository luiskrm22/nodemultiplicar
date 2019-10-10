var colors = require('colors');

const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es numero');
            return
        }

        let tabla = ''
        for (let i = 1; i < limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }
        console.log(tabla.rainbow);
    })

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es numero');
            return
        }

        let tabla = ''
        for (let i = 1; i < limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tabla-${base}.txt`, tabla, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });


    });
}


module.exports = {
    crearArchivo,
    listarTabla
}
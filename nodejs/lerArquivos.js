const fs = require('fs') //importando um modulo de leitura de arquivos

console.log(__dirname);

fs.readFile(__dirname+'/../nome.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Erro na leitura do arquivo', err);
        return;
    }

    console.log(data);
})
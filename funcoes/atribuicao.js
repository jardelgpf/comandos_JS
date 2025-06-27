//funcao de atribuicao e aquela que e atribuida a uma expressao (variavel ou constante)
let funcao = function(){
    console.log('funcao atribuida');
}

//chamando
funcao()

let anonima = function(){
    return function(){
        console.log('executando funcao anonima');        
    }
}
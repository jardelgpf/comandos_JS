//funcao declaration - declaracao
/*
1. palavra reservada function
2. nome da funcao
3. () parenteses
4; {} chaves - dentro das chaves é o corpo (escopo) da funcao
*/
function saudacao(){
    console.log('executando saudacao');
}

//chamar a funcao
saudacao()

//funcao sem retorno - void
function semRetorno(){
    console.log('apenas executa e não retorna nada')
}

//funcao com retorno
function comRetorno(){
    return 1+1
}

let resultado = comRetorno()
console.log(resultado);

//funcoes podem ter parametros
//parametros sao uma forma de injetar um valor dentro do corpo da funcao
function comParametro(mensagem){
    console.log(mensagem);
}
comParametro('ola mundo')

function comParametro(valor1, valor2){
    return valor1 + valor2
}

console.log(comParametro(100, 50));

//passando parametros com valor padrao

function parametroPadrao(v1 = 0, v2 = 0){
    return v1 + v2
}

console.log(parametroPadrao(300, 150));

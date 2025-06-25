let variavelString = "Jardel";
let nome
let numero = 10
let numeroDecimal = 10.5
let boleana = true
let indefinido = undefined
let nulo = null
let tipoArray = []
let tipoObjeto = {}

const pi = 1.32
const TX_CAMBIO = 10

//COMENTARIO DDE UMA LINHA

/**Comentario de 
 * documentacao
 */

/*
comentario de multiplas linhas*/

//OPERADORES ARITMETICOS
console.log(1 + 1); //Operador de adição
console.log('1' + '1'); //Quanto tenho valores de string com + vira operador de concatenação
console.log(10 - 5);//Subtração
console.log(10 * 2);//multiplicacao
console.log(10 / 2);//divisao
console.log(10 % 2);//resto de divisao (modulo)
console.log(10 ** 2);//exponenciacao
numero++ //incremento
numero-- //decremento

//OPERADORES DE ATRIBUICAO
let valor = 10 //atribuicao simples
valor += 10 //atribuicao com adicao

//ATRIBUICAO COM CONCATENACAO EM CASO DE STRING
let professor = 'Diego'
professor += 'Bracellos'
console.log(professor);

valor -= 3 //atribuicao com subtracao
valor *= 2 //atribuicao com multiplicacao
valor /= 3 //atrivuicao com divisao
valor %= 3 //atribuicao com modulo

//operadores de comparacao
console.log(1 == 1); //comparacao de igualdade de valor
console.log('1' == 1);//comparacao apenas de valor, portanto true
console.log(1 === 1);//comparacao de valor e tipo
console.log('1' === 1);//comparacao de valor e tipo string é diferente do tipo number
console.log(1 != 2);//diferente de no valor
console.log('1' != 2);//diferente no valor
console.log('1' != 1);//diferente no valoresta comparando apenas o valor, portanto falso
console.log('1' !== 1);//compara o valor e tipo, portando true
console.log(10 > 5);// compara se o valor e maior que
console.log(10 >= 10);//compara se o valor e maior ou igual
console.log(5 < 10);//compara se 5 e maior que 10
console.log(10 <= 10);//compara se 10 e menor ou igual a 10

//operadores logicos
console.log(true && true);//&& significa e onde ambas as condicoes precisam ser true
console.log(true || false);//|| significa ou onde se uma das condicoes for true, o resultado sera true
console.log(!true);//! é uma negacao. se for true inverte para false e e se for false, inverte para true

//operador ternario
console.log(10 > 8 ? 'o numero e maior' : 'o numero e menor');
let resultado = 10 > 5 ? 'nota maxima' : 'nota minima'

//operadores especiais
console.log(typeof 100);//retorna o tipo de dado de uma expressao ou variavel
//console.log(auto instanceof Array);//verifica se o objeto foi criado a partir de um construtor
console.log(nome ?? 'sem nome');//operador de coalescencia nula

//controles de decisao
if(valor == 10){
    console.log('aqui vai o codigo se for true');
}else{
    console.log('aqui vai o codigo se for false');    
}
let idade = 10
if(idade < 10){
    console.log('crianca');    
}else if(idade < 18){
    console.log('adolescente');    
}else if(idade < 30){
    console.log('adulto');    
}else{
    console.log('Idoso');    
}

//switch
let horario = 8
switch (horario) {
    case 8:
        console.log('8 badalos');        
        break;
    case 12:
        console.log('12 badalos');
        break;
    case 18:
        console.log('6 badalos');
        break;
    default:
        console.log('1 badalo');        
}

//array (lista, vetor)

let pessoas = ['Maria', 'Jose', 'Jose']
let comidas = [
    'Pizza',
    'Feijoada',
    'Churrasco'
]

let misturado = ['string', 10, true]

//array com matriz
let matriz = [
    [1,2,3],
    [4,5,6]
]

let matriz2 = [
    [
        [1,2,3]
    ],
    [
        [4,5,6],
        [7,8,9]
    ]
]

let pacientes = [
    [
        'José',
        [35, 1.75, 120]
    ],
    [
        'Maria',
        [55, 1.55, 100]
    ],
    [
        'Thiago'
        [18, 1.77, 80]
    ]
]

//acessando variaveis
/* console.log(pessoas[1]);
console.log(matriz[1][1]);
console.log(matriz2[1][1][2]);
console.log(pacientes[0][0]);
console.log('Idade: ',pacientes[0][1][0]);
console.log('Altura: ',pacientes[0][1][1]);
console.log('Peso: ',pacientes[0][1][2]);
 */

//funcoes para array
let frutas = ['Banana', 'Melancia']
console.log(frutas);
frutas.push('Manga')//adiciona um novo item ao final do array
console.log(frutas);

frutas.pop()//remove o ultimo item do array
console.log(frutas);

frutas.unshift('Melão')
console.log(frutas);

frutas.shift()//remove o primeiro elemento de um array
console.log(frutas);

console.log(frutas.indexOf('Banana'));//busca o indice de um item

console.log(frutas.includes('Melancia'));//verifica se existe um elemento no array

//ordenar um array
console.log(frutas.sort());




















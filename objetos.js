/*
objetos no javascript sao colecoes de dados organizados com chave:valor
objetos servem para representar coisas do mundo real como pessoas, carros, produtos
*/

let pessoa = {
    nome : 'Diego',
    idade: 40,
    profissao : 'Programador',
    saudacao : () => {
        return`Olá, meu nome é ${this.nome} e gosto de programar`
        //return 'Olá, meu nome é '+this.nome+'e gosto de progrmar'
    }
}

console.log(pessoa.nome);
console.log(pessoa.saudacao());

//adicionar novas propriedades
pessoa.corPreferida = 'Vermelho'
console.log(pessoa);

//remover uma propriedade
delete pessoa.corPreferida
console.log(pessoa);

//misturando arrays com objetos 

let pessoas = [
    {
        nome : 'Diego',
        idade : '40',
        email : 'bracellos@gmail.com'
    },
    {
        nome : 'Maria',
        idade : '33',
        email : 'mariazinha@gmail.com'
    },
    {
        nome : 'José',
        idade : '55',
        email : 'josedascoves@gmail.com'
    }
]

console.log(pessoas[1].nome);



/*//! Arrays

Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nome" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

                      0         1          2         3
Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.
*/

const lista = [ // A lista pode ser feita com a linha quebrada.
    "arroz",
    "feijão",
    "macarrão",
    "leite"
];

//! Outra forma de criar um array (lista)
const lista2 = [];
lista[0] = "banana";
lista[1] = "maçã";
lista[2] = "uva";
lista[3] = "manga";

//? Mais uma forma de criar um array 
const lista3 = new Array('farinha', 'sal', 'açúcar', 'óleo');
lista3[0] = 'Café'; //Mudou o valor da posição 3 para Café.

// IMPORTANTE! Arrays são um tipo de objeto. Dentro deles, podem haver funções ou outros arrays.

const pessoa = ['Cristiano', 'Barbosa', 37]; // array
const pessoaa = {nome: 'Cristiano', sobrenome: 'Barbosa', idade: 30}; // Objeto

console.log(pessoa.length); // retorna a quantidade de itens dentro do array 
console.log(pessoa[pessoa.length-1]); // mostra o último item 

// pessoa.shift(); remove o elemento da posição 0
// pessoa.pop(); remove o elemento da última posição
// pessoa.unshift(); adiciona um elemento na primeira posição [0]
// delete pessoa[0]; deleta o item da posição 0, mas, no lugar, fica como undefined (ainda continua um buraco na lista)
// splice(); ver a função

const superLista = lista.concat(lista2); // cria uma nova lista com as duas especificadas
// console.log(superLista); 

const jogadores = [ // utilizando o método slice() "fatiar"
    "Biro Biro",
    "Ribamar",
    "Pelé",
    "Maradona",
    "Neymar",
    "Cristiano Ronaldo",
    "Vampeta",
    "Cristiano"
]
const craques = jogadores.slice(2, 6); // Vai selecionar a partir da posição 2 até a posição 6, sem  incluir a posição 6.

console.log(craques.sort()); // imprimiu os nome em ordem alfabética com o método sort();

//! IMPORTANTE!!!
// Colocando números em ordem crescente:

const numeros = [40, 100, 1, 5, 25, 10];
console.log(numeros.sort(function (a, b) {return a - b})); // Imprime os números na ordem crescente de forma correta.

// Exemplo de função para pegar os maiores números que 20 (poderia ser qualquer número):
const maior20 = numeros.filter(filtragem);
function filtragem(value, index, array) {
    return value > 20;
}
console.log(maior20);

// Exemplo de função para pegar o maior valor
function maiorNumero(numeros){
    return Math.max.apply(null, numeros);
}
console.log(`O maior valor é ${maiorNumero()}`)

// Exemplo de função para pegar o menor valor

/*
Variáveis no JS

No JavaScript temos 3 tipos de palavras-chave para declarar variáveis:

• var → pode ser atribuído outro valor no decorrer do programa
• let → não permite a redeclaração de valores dentro de um mesmo escopo. Serve para evitar repetição de variáveis dentro do código.
• const → valor imutável independentemente do escopo em que esteja a variável.

*/

/*
? Exemplo de declaração de variáveis

! Declaração de variáveis
var a, b, c;

! Atribuição de valores (não precisa repetir a palavra var aqui no começo porque já foi definido na primeira linha (var a, b, c))
a = 2;
b = 3;
c = a + b;
*/ 

//! DECLARAÇÃO DE VARIÁVEIS
var nome, sobrenome, nomeCompleto;
nome = 'Cristiano';
sobrenome = 'Barbosa de Lira'
// nomeCompleto = nome + " " + sobrenome;
// nomeCompleto = nome + " " + sobrenome;
nomeCompleto = `${nome} ${sobrenome}`
console.log(nomeCompleto)

/*
document.getElementById("texto").innerHTML = nomeCompleto;
*/

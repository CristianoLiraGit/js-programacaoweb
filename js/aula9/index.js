/* Objetos
Objetos são basicamente variáveis com muitos valores dentro (variáveis compostas)

EX.: const carro = (marca:"ford", modelo:"ka", ano: 2015)

Os valores dentro de um objetos são chamados propriedades.

Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade

*/

// const carro = {marca: "ford", modelo: "Ka", placa: "ABC-2345"}; // é comum criar objetos utilizando o "const".

const carro = {
    marca: "ford", 
    modelo: "Ka",
    ano: 2015, 
    placa: "ABC-2345",
    buzina: function(){alert('Biiiiiiiiii!')},
    completo: function(){
        return `A marca é ${this.marca} e o modelo é ${this.modelo}.`
    }
}; // Também é possível criar o objeto pulando linhas.

// carro.buzina(); // Chamando a função buzina
console.log(carro.completo());
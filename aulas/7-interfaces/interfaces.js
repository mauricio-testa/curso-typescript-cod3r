"use strict";
/**
 * Exclusivo do Typescript!
 * Uma interface é um contrato
 */
function saudar(humano) {
    console.log('Olá ' + humano.nome);
}
const guri = {
    nome: 'Joao',
    idade: 27,
    saudar() {
        console.log('Olá ' + this.nome);
    },
};
saudar(guri);
//saudar({nome: 'Sem idade'})
//saudar({nome: 'Com atributo dinamico', idade: 10, altura: 120})
// usando classes
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar() {
        console.log('Olá ' + this.nome);
    }
}
const clienteOpa = new Cliente();
clienteOpa.nome = 'Sabrina';
clienteOpa.saudar();
let perimetro = (a, b) => (a * 2) + (b * 2);
console.log(perimetro(3, 7));

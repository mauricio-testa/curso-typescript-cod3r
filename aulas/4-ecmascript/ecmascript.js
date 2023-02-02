"use strict";
/***** const e let *****/
// var: escopo global e de função
// let e const: escopo global, de função e de bloco
// exemplo de bloco
for (let index = 0; index < 3; index++) {
    console.log(index);
}
// console.log(index) --> erro porque index está no bloco. var funciona porque faz o hoisting
/***** arrow function *****/
// no typescript arrow function com 1 parametro precisa estar entre parenteses
const ligar = (numero = 12345) => console.log('ligando para ' + numero);
// o this da função é o mesmo que está na linha anterior
// const debugarThis = () => console.log(this)
/***** spread / rest *****/
// spread: sobe um nível
const numbers = [4, 9, 1, -1];
console.log(Math.max(...numbers));
// é o mesmo que Math.max(4, 9, 1, -1)
// spread: merge
const alunos1 = ['Mauricio', 'Ana'];
const alunos2 = ['Fabio', 'Murilo', ...alunos1];
console.log(alunos2);
// rest: argumentos infinitos
function variosParametros(comida, ...numeros) {
    console.log('polenta', numbers);
}
variosParametros('polenta', 43, 6, 32, 1, 8); // [4, 9, 1, -1]
// destructuring - Array
const carro = ['Uno', 2011];
const [marca, ano] = carro; //destructuring
console.log(marca, ano);
const [b, c] = [1, 2];
// destructuring - Objeto
const notebook = {
    marca: 'Dell',
    polegadas: 14,
    teclado: {
        tipo: 'Numerico'
    }
};
const { marca: m, polegadas: p, teclado: { tipo: t } } = notebook;
// pode criar alias pras variáveis não ter conflito com nomes já definidos
console.log(m, p, t);
/**
 * EXERCICIOS
 */
// Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Verifique se há espaço para melhorias nesse trecho de código!
const dizerOla = (nome = 'Pessoa') => {
    console.log(`Olá, ${nome}`);
};
dizerOla();
dizerOla("Anna");
// Dado esse array, imprima o menor valor!
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Adicione os elementos de nums em array !
const nums2 = [-3, 33, 38, 5];
var array = [55, 20];
array.push(...nums);
console.log(array);
// Simplifique os trechos de código abaixo utilizando o operador Destructuring!
const notas = [8.5, 6.3, 9.4];
const [notas1, notas2, notas3] = notas;
console.log(notas1, notas2, notas3);
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// promisse -> grande vantagem sobre callbacks são o encadeamento de "then"
fetch('https://swapi.dev/api/people/1') // pega um ator
    .then(res => res.json()) // transforma pra json
    .then(films => fetch(films.films[0])) // pega informações do primeiro filme do ator
    .then(resFilms => resFilms.json()) // transforma o filme pra json
    .then(filme => console.log(filme.title)); // mostra o nome do primeiro filme

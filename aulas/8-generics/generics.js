"use strict";
/**
 * GENERICS
 * Usado quando eu tenho uma função/objeto/classe/array que tem entradas e saídas dinâmicas
 * Mas quando eu uso ela, defino a forma que eu vou utilizar estabelecendo uma espécie de contrato
 *
 * Exemplo
 * function teste<ENTRADA> (){}
 * teste<number>()
 * teste<string>()
 *
 * É tipo um any que eu defino os comportamentos no momento que vou consumir o generic
 */
function echo(objeto) {
    return objeto;
}
console.log(echo('Joao').length);
console.log(echo(20).length); // undefined
console.log(echo({ nome: 'Joao' }).length); // undefined
// Usando generics
function echoGenerics(objeto) {
    return objeto;
}
console.log(echoGenerics('Joao').length);
console.log(echoGenerics(20)); // força a ser ser resolvido como number
// console.log(echoGenerics({nome: 'Joao'}).length) // Property 'length' does not exist on type '{ nome: string; }'
/**
 * EXPLICAÇÃO: é como se fosse um any
 * mas é um any resolvido no momento da execução
 * a partir da inferência => echoGenerics('Joao') => resolve como uma string
 * ou da utilização do generics => echoGenerics<number>(20) => força ser resolvido como number
 */
// ************* Array (exemplo de api) *************
/**
 * Com tipo
 *
 * Já defino o tipo como array de números específico
 */
const avaliacoes2 = [10, 9, 4];
/**
 * Com generics
 *
 * A classe "Array" é uma classe genérica.
 * No momento que eu instancio ela, passo a definir ela no formato de específico array de números
 */
const avaliacoes = [10, 9, 4];
// avaliacoes.push('2')
console.log(avaliacoes);
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['A', 'B', 'C']);
imprimir([
    { nome: 'Paulo' },
    { nome: 'Pedro' }
]);
imprimir([
    { nome: 'Paulo' },
    { nome: 'Pedro' }
]);
const chamarEcho = echoGenerics;
console.log(chamarEcho('Chamar echo'));
// ************* Classes *************
// sem generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria('Bom', 'Dia').executar());
console.log(new OperacaoBinaria(3, 6).executar());
console.log(new OperacaoBinaria({}, {}).executar()); // não faz sentido [object Object][object Object]
// com generics
// T => tipo de input
// R => tipo do retorno
class OperacaoBinariaGenerics {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinariaGenerics {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
class DiferencaEntreDatas extends OperacaoBinariaGenerics {
    executar() {
        const diferenca = Math.abs(this.operando1.getTime() - this.operando2.getTime());
        const dia = 1000 * 60 * 60 * 24;
        return (diferenca / dia) + ' dias';
    }
}
console.log(new DiferencaEntreDatas(new Date('2023-01-01'), new Date()).executar());
// ************* Desafio 1 *************
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(element) {
        this.fila.push(element);
    }
    atender() {
        this.fila.splice(0, 1);
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila('Mauricio', 'Ana');
fila.imprimir();
fila.entrar('Lisi');
fila.imprimir();
fila.atender();
fila.imprimir();
new Fila(1, 2, 3);
class Mapa {
    constructor() {
        this.items = [];
    }
    obter(chave) {
        return this.items.find(i => i.chave === chave) || null;
    }
    colocar(item) {
        const { chave, valor } = item;
        const mapItem = this.obter(chave);
        if (mapItem) {
            mapItem.valor = valor;
        }
        else {
            this.items.push({ chave, valor });
        }
    }
    imprimir() {
        console.log(this.items);
    }
    limpar() {
        this.items = [];
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maira' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();

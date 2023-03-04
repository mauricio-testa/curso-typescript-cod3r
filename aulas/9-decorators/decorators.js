"use strict";
// tsconfig.json => "experimentalDecorators": true, 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Essa função será chamada como decorator assim que a Classe for carregada
 */
function logarClasse(construtor) {
    console.log(construtor);
}
/**
 * Essa função retorna um decorator de forma condicional
 */
function logarClasseSe(valor) {
    return valor ? logarClasse : (_) => {
        console.log('não logar');
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo');
    }
};
Eletrodomestico = __decorate([
    logarClasseSe(true),
    classeInterceptor
], Eletrodomestico);
/* *************** Adicionar funcionalidade com decorators *********/
/**
 * O decorator é chamado sempre que a classe é carregada
 * não quando é instanciada
 *
 * para adicionar um código que vai ser executado em todas as instâncias existe a técnica abaixo
 * ela altera o método construtor da classe Eletrodomestico (pra adicionar funcionalidades)
 * e extende o construtor original
*/
function classeInterceptor(construtor) {
    console.log('Carregado...');
    construtor.prototype.imprimir = function () {
        console.log('adicionei o método imprimir pelo decorator hehehe');
    };
    return class extends construtor {
        constructor(...args) {
            console.log('antes...');
            super(...args);
            console.log('depois...');
        }
    };
}
new Eletrodomestico();
/****** decorator de método, atributo e parametro */
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    getSaldo() {
        return this.saldo;
    }
}
__decorate([
    naoNegativo
], ContaCorrente.prototype, "saldo", void 0);
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldo", null);
const cc = new ContaCorrente(10000);
cc.sacar(8000);
console.log(cc.getSaldo());
cc.sacar(8000);
// metodo
function congelar(alvo, metodo, descritor) {
    console.log(alvo, metodo);
    descritor.writable = false;
}
// patributo
function naoNegativo(alvo, nomePropriedade) {
    // deleta a propriedade original e cria uma nova com get set
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Não pode ser negatvo');
            }
            else {
                alvo["_" + nomePropriedade] = valor;
            }
        }
    });
}
// parametro
function paramInfo(alvo, nomeMetodo, indiceParam) {
    console.log({ alvo, nomeMetodo, indiceParam });
}

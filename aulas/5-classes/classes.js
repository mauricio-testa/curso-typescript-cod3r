"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1790) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario);
const casamento = new Data; // posso omitir ()
// FORMA SIMPLES DO EXEMPLO ACIMA - colocar public no construtor. não precisa inicialização nem atribuição das variáveis
class DataSimplificada {
    constructor(dia = 1, mes = 1, ano = 1790) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioMelhor = new DataSimplificada(3, 11, 1991);
console.log(aniversarioMelhor);
/**
 * Exercícios
 */
// desafio produto
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    // também é public
    precoComDesconto() {
        return this.preco - (this.preco * this.desconto);
    }
}
const prod1 = new Produto('Cerveja', 4.99);
const prod2 = new Produto('Carne', 100, 0.1);
console.log(prod1, prod2, prod1.resumo(), prod2.resumo());
/**
 * Visibilidade
 *
 * public: visível pra todos
 * protected: visível dentro da classe e transmissível por herança
 * private: visível somente dentro da classe
 */
class Automovel {
    constructor(marca, modelo, valocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.valocidadeMaxima = valocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // precisa ser protected pra estar disponível por herança
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.valocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.valocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const auto1 = new Automovel('Uno', 'Fiat', 200);
for (let index = 0; index < 25; index++) {
    auto1.acelerar();
}
console.log(auto1);
for (let index = 0; index < 10; index++) {
    auto1.frear();
}
console.log(auto1);
/**
 * Herança
 *
 * tem 1 => composição (ex ferrari TEM 1 volante)
 * é um => herança  (ex ferrari É UM carro)
 */
class Ferrari extends Automovel {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima); // chama o construtor da classe pai e predefine modelo como ferrari
    }
    // posso sobrescrever os métodos da classe original
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 400);
f40.acelerar();
console.log(f40);
/**
 * Getter e setter
 *
 * personaliza a manipulação dos atributos
 */
class Person {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        // validação
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const person1 = new Person;
person1.idade = 28;
console.log(person1);
person1.idade = -2;
console.log(person1);
/**
 * Static
 *
 * pertence à classe e não a instância
 */
class Matematica {
    static areaCirculo(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.14;
console.log(Matematica.areaCirculo(4));
/**
 * Classe abstrata
 *
 * não pode ser instanciada diretamente
 * serve para ser herdada por outras classes
 */
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
// new Calculo() //Cannot create an instance of an abstract class.ts(2511)
// essa classe é obrigada a ter o método executar. pq o método executar é abstrato. 
// é como se fosse uma interface do php -> especificação da implementação das classes
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4);
console.log(c1.getResultado());
// c1 -> polimorfismo - pode assumir múltiplos comportamentos
/**
 * Construtor privado e Singleton
 */
class BancoDeDados {
    constructor() { }
    static getInstance() {
        return BancoDeDados.instance;
    }
}
BancoDeDados.instance = new BancoDeDados;
/**
 * Readonly
 */
class Idioma {
    constructor(slug) {
        this.slug = slug;
        this.slug = slug;
    }
}
const en = new Idioma('en-us');
// en.slug = 'en_us' // Cannot assign to 'slug' because it is a read-only property.ts(2540)

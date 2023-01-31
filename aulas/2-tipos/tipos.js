"use strict";
console.log("********* SEÇÃO 2 **********");
/**** Todos os Tipos *****/
var Sexo;
(function (Sexo) {
    Sexo["Masculino"] = "M";
    Sexo["Feminino"] = "F";
})(Sexo || (Sexo = {}));
let numero = 20;
let texto = 'Lorem ipsum';
let boleano = false;
let qualquerCoisa = 'Qualquer coisa aqui';
let estaAtivo = 1;
let nulo = null;
let arrayDeNumeros = [1, 20, 30.6];
let arrayDeStrings = ['Teste', 'Texto'];
let arrayDeQualquerCoisa = [1, 'Teste', false, Sexo.Masculino];
let sexoEnum = Sexo.Feminino;
let tupla = ['Mauricio Testa', 25, Sexo.Masculino];
let funcaoTipada = (nome, idade) => `${nome} tem ${idade} anos`;
let funcaoSemRetorno = () => console.log('Oii');
let objetoPessoa = { nome: 'Mauricio', idade: 26 };
let carro1 = { marca: 'VW', ano: 2011 };
let carro2 = { marca: 'Fiat', ano: 1998 };
/**** Tipos implícitos *****/
/***** string  *****/
let nome = 'Mauricio';
console.log(nome);
// nome = 20 ---> Type 'number' is not assignable to type 'string'
/***** number  *****/
let peso = 20; // inteiro
peso = 20.4; // float
// peso = [2] --->  Type 'number[]' is not assignable to type 'number'
console.log(peso);
/***** boolean *****/
let bonito = true;
// bonito = 10 ---> Type 'number' is not assignable to type 'boolean'
console.log(bonito);
/**** Tipos explícitos *****/
// se declara variável sem um tipo e atribui valor depois, o tipo é "any"
let idade; // any
idade = 27;
console.log(typeof idade);
idade = 'vinte e sete';
console.log(typeof idade);
/**** number ****/
let minhaIdade;
minhaIdade = 20;
// minhaIdade = 'vinte' ---> Type 'string' is not assignable to type 'number'
/***** arrays  *****/
// é possível definir o tipo dos elementos do array
let atividades = ['Programar', 'Comer', 'Dormir'];
// atividades.push(200) ---> é um array de strings e não de números
let atividadesString = ['Dormir', 'Comer'];
console.log(atividades, atividadesString);
/***** tuplas  *****/
// é um array, só que podemos definir um tipo de dado para cada "coluna" do array
let endereco = ["Av presidente vargas", 240, 'RS', false];
console.log(endereco);
/***** enum  *****/
// opções predefinidas
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Amarelo"] = 102] = "Amarelo";
    Cor[Cor["Preto"] = 100] = "Preto"; //nada impede de ser duplicado
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor, Cor);
// pode atribuir um valor para cada item
// se não atribuir nenhum valor à opção, o valor será o index anterior + 1
// começa com 0
/***** any  *****/
// a variável se comporta igual no javascript
/***** funções  *****/
// retorna uma string
function meuNome() {
    return nome;
}
console.log(meuNome());
// não retorna nada
function naoRetornaNada() {
    console.log('essa funcao nao retorna nada');
}
// tipo dos parâmetros
function funcaoComParametro(numA, numB) {
    return numA * numB;
}
console.log(funcaoComParametro(4, 5.8));
// muito útil pra callbacks
let calculo;
calculo = funcaoComParametro;
/**** never ****/
// quando a função ou vai dar erro ou vai ficar em loop - não é ausência de retorno
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabonete',
    preco: 9,
    validar() {
        if (this.preco < 0) {
            falha('Preço é menor que 0');
        }
    }
};
produto.validar();
/**** Objeto ****/
// tanto faz a ordem
// os tipos podem ser automáticos...
let usuario = {
    nome: 'Mauricio',
    idade: 25
};
// usuario = {} // ---> Type '{}' is missing the following properties from type '{ nome: string; idade: number; }': nome, idade
// ...ou explícitos
let pessoa = {
    nome: 'Mauricio',
    idade: 25
};
console.log(pessoa);
const contato1 = {
    nome: 'Mauricio',
    tel1: '45454654654',
    tel2: null
};
let professor = {
    nome: 'Neri',
    filhos: ['Giulia', 'Guto'],
    idade: 50,
    sexo: Sexo.Masculino
};
let aluno = {
    nome: 'Mauricio',
    filhos: [],
    idade: 25,
    sexo: Sexo.Masculino
};
console.log(professor, aluno);
/**** union types ****/
let nota;
nota = 10;
console.log('nota: ' + nota);
nota = '10';
console.log('nota: ' + nota);
// para poder ser opcional
let notaOpcional;
notaOpcional = 90;
notaOpcional = null;
/**
 * ATIVIDADES
 */
/**** desafio funcionário ****/
let funcionario = {
    supervisores: ['Mauricio', 'Ana'],
    baterPonto: (hora) => {
        if (hora <= 8) {
            return ('Ponto normal');
        }
        else {
            return ('Fora do horário');
        }
    }
};
console.log(funcionario.baterPonto(9));
let contaBancaria = {
    saldo: 3423,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana',
    contaBancaria: contaBancaria,
    contatos: ['123123312', '532142452']
};
correntista.contaBancaria.depositar(30000);
console.log(correntista);

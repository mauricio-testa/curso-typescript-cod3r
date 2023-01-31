console.log("********* SEÇÃO 2 **********")

/**** Todos os Tipos *****/
enum Sexo {
	Masculino = 'M',
	Feminino = 'F'
}
let numero: number = 20
let texto: string = 'Lorem ipsum'
let boleano: boolean = false
let qualquerCoisa: any = 'Qualquer coisa aqui'
let estaAtivo: boolean|number = 1
let nulo: null = null

let arrayDeNumeros: number[] = [1, 20, 30.6]
let arrayDeStrings: string[] = ['Teste', 'Texto']
let arrayDeQualquerCoisa: any[] = [1, 'Teste', false, Sexo.Masculino]

let sexoEnum: Sexo = Sexo.Feminino
let tupla: [string, number, Sexo] = ['Mauricio Testa', 25, Sexo.Masculino]

let funcaoTipada = (nome: string, idade: number) : string => `${nome} tem ${idade} anos`
let funcaoSemRetorno = () : void => console.log('Oii')

let objetoPessoa: { nome: string, idade: number } = { nome: 'Mauricio', idade: 26}

type Carro = { marca: string, ano: number}
let carro1: Carro = { marca: 'VW', ano: 2011}
let carro2: Carro = { marca: 'Fiat', ano: 1998}

/**** Tipos implícitos *****/

/***** string  *****/ 
let nome = 'Mauricio'
console.log(nome)
// nome = 20 ---> Type 'number' is not assignable to type 'string'

/***** number  *****/ 
let peso = 20 // inteiro
peso = 20.4 // float
// peso = [2] --->  Type 'number[]' is not assignable to type 'number'
console.log(peso)

/***** boolean *****/ 
let bonito = true
// bonito = 10 ---> Type 'number' is not assignable to type 'boolean'
console.log(bonito)

/**** Tipos explícitos *****/

// se declara variável sem um tipo e atribui valor depois, o tipo é "any"
let idade // any
idade = 27
console.log(typeof idade)
idade = 'vinte e sete'
console.log(typeof idade)

/**** number ****/
let minhaIdade: number
minhaIdade = 20
// minhaIdade = 'vinte' ---> Type 'string' is not assignable to type 'number'

/***** arrays  *****/ 
// é possível definir o tipo dos elementos do array
let atividades = ['Programar', 'Comer', 'Dormir']
// atividades.push(200) ---> é um array de strings e não de números
let atividadesString: string[] = ['Dormir', 'Comer']
console.log(atividades, atividadesString)

/***** tuplas  *****/ 
// é um array, só que podemos definir um tipo de dado para cada "coluna" do array
let endereco: [string, number, string, boolean] = ["Av presidente vargas", 240, 'RS', false]
console.log(endereco)

/***** enum  *****/
// opções predefinidas
enum Cor {
	Cinza, //0
	Verde = 100, //100
	Azul, //2
	Amarelo,
	Preto = 100 //nada impede de ser duplicado
}
let minhaCor: Cor = Cor.Verde
console.log(minhaCor, Cor)
// pode atribuir um valor para cada item
// se não atribuir nenhum valor à opção, o valor será o index anterior + 1
// começa com 0

/***** any  *****/
// a variável se comporta igual no javascript

/***** funções  *****/
// retorna uma string
function meuNome(): string {
	return nome
}
console.log(meuNome())

// não retorna nada
function naoRetornaNada(): void {
	console.log('essa funcao nao retorna nada')
}

// tipo dos parâmetros
function funcaoComParametro(numA: number, numB: number) : number {
	return numA * numB
}
console.log(funcaoComParametro(4, 5.8))

// muito útil pra callbacks
let calculo: (a: number, b: number) => number
calculo = funcaoComParametro

/**** never ****/
// quando a função ou vai dar erro ou vai ficar em loop - não é ausência de retorno
function falha (msg: string) : never {
	throw new Error(msg)
}
const produto: {nome: string, preco: number, validar: () => void} = {
	nome: 'Sabonete',
	preco: 9,
	validar() {
		if (this.preco < 0) {
			falha('Preço é menor que 0')
		}
	}
}
produto.validar()

/**** Objeto ****/
// tanto faz a ordem
// os tipos podem ser automáticos...
let usuario = {
	nome: 'Mauricio',
	idade: 25
}
// usuario = {} // ---> Type '{}' is missing the following properties from type '{ nome: string; idade: number; }': nome, idade
// ...ou explícitos
let pessoa: { nome: string, idade: number } = {
	nome: 'Mauricio',
	idade: 25
}
console.log(pessoa)

/**** Null ****/
type Contato = {
	nome: string,
	tel1: string,
	tel2: string|null
}
const contato1: Contato = {
	nome: 'Mauricio',
	tel1: '45454654654',
	tel2: null
}

/**** tipos personalizados ****/
type Pessoa = {
	nome: string,
	filhos: string[],
	idade: number,
	sexo: Sexo
}

let professor: Pessoa = {
	nome: 'Neri',
	filhos: ['Giulia', 'Guto'],
	idade: 50,
	sexo: Sexo.Masculino
}
let aluno: Pessoa = {
	nome: 'Mauricio',
	filhos: [],
	idade: 25,
	sexo: Sexo.Masculino
}
console.log(professor, aluno)

/**** union types ****/
let nota: string|number
nota = 10
console.log('nota: ' + nota)
nota = '10'
console.log('nota: ' + nota)

// para poder ser opcional
let notaOpcional: string|number|null
notaOpcional = 90
notaOpcional = null

/**
 * ATIVIDADES
 */

/**** desafio funcionário ****/
let funcionario: {
	supervisores: string[],
	baterPonto: (hora: number) => string
} = {
	supervisores: ['Mauricio', 'Ana'],
	baterPonto: (hora: number): string => {
		if (hora <= 8) {
			return ('Ponto normal')
		} else {
			return ('Fora do horário')
		}
	}
}
console.log(funcionario.baterPonto(9))

/**** desafio conta bancária ****/
type ContaBancaria = {
	saldo: number, 
	depositar: (valor: number) => void
}

type Correntista = {
	nome: string,
	contaBancaria: ContaBancaria,
	contatos: string[]
}

let contaBancaria: ContaBancaria = {
	saldo: 3423,
	depositar(valor: number) {
		this.saldo += valor
	}
}

let correntista: Correntista = {
	nome: 'Ana',
	contaBancaria: contaBancaria,
	contatos: ['123123312', '532142452']
}

correntista.contaBancaria.depositar(30000)
console.log(correntista)
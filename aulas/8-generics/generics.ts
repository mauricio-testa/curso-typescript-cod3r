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


function echo (objeto: any) {
	return objeto
}

console.log(echo('Joao').length)
console.log(echo(20).length) // undefined
console.log(echo({nome: 'Joao'}).length) // undefined

// Usando generics

function echoGenerics<TIPO>(objeto: TIPO): TIPO {
	return objeto
}

console.log(echoGenerics('Joao').length)
console.log(echoGenerics<number>(20)) // força a ser ser resolvido como number
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
const avaliacoes2: number[] = [10, 9, 4]
/**
 * Com generics
 * 
 * A classe "Array" é uma classe genérica. 
 * No momento que eu instancio ela, passo a definir ela no formato de específico array de números
 */
const avaliacoes: Array<number> = [10, 9, 4]
// avaliacoes.push('2')
console.log(avaliacoes)

function imprimir<T>(args: T[]) {
	args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])

imprimir<number>([1, 2, 3])

imprimir<string>(['A', 'B', 'C'])

imprimir<{ nome: string}>([
	{ nome: 'Paulo' },
	{ nome: 'Pedro' }
])

type Aluno = { nome: String }
imprimir<Aluno>([
	{ nome: 'Paulo' },
	{ nome: 'Pedro' }
])

// ************* Função *************

type Echo = <T>(data: T) => T // T é um tipo função que recebe "data" do tipo T e retorna T
const chamarEcho: Echo = echoGenerics
console.log(chamarEcho('Chamar echo'))

// ************* Classes *************

// sem generics
class OperacaoBinaria {
	constructor(public operando1: any, public operando2: any) {}
	executar() {
		return this.operando1 + this.operando2
	}
}

console.log(new OperacaoBinaria('Bom', 'Dia').executar())
console.log(new OperacaoBinaria(3, 6).executar())
console.log(new OperacaoBinaria({}, {}).executar()) // não faz sentido [object Object][object Object]

// com generics
// T => tipo de input
// R => tipo do retorno
abstract class OperacaoBinariaGenerics<T, R> {
	constructor(public operando1: T, public operando2: T) {}
	abstract executar(): R
}

class SomaBinaria extends OperacaoBinariaGenerics<number, number> {
	executar(): number {
		return this.operando1 + this.operando2
	}
}
console.log(new SomaBinaria(3, 4).executar())

class DiferencaEntreDatas extends OperacaoBinariaGenerics<Date, string> {
	executar(): string {
		const diferenca = Math.abs(this.operando1.getTime() - this.operando2.getTime())
		const dia = 1000 * 60 * 60 * 24
		return (diferenca / dia) + ' dias'
	}
}
console.log(new DiferencaEntreDatas(
	new Date('2023-01-01'),
	new Date()
).executar())

// ************* Desafio 1 *************

class Fila<TIPOFILA extends number | string> { // restringe que somente pode receber o tipo number e string
//class Fila<TIPOFILA> {
	private fila: Array<TIPOFILA>
	constructor(...args: TIPOFILA[]){
		this.fila = args
	}
	entrar(element: TIPOFILA){
		this.fila.push(element)
	}
	atender(){
		this.fila.splice(0, 1)
	}
	imprimir(){
		console.log(this.fila)
	}
}

const fila = new Fila<string>('Mauricio', 'Ana')
fila.imprimir()
fila.entrar('Lisi')
fila.imprimir()
fila.atender()
fila.imprimir()

new Fila<number>(1,2,3)
// new Fila<boolean>(true, false) //Type 'boolean' does not satisfy the constraint 'string | number'.ts(2344)

// ************* Desafio 2 *************

type MapItem<K, V> = {chave: K,	valor: V}

class Mapa<CHAVE, VALOR>{
	private items: MapItem<CHAVE, VALOR>[] = []

	obter(chave: CHAVE): MapItem<CHAVE, VALOR> | null {
		return this.items.find(i => i.chave === chave) || null
	}
	colocar(item: MapItem<CHAVE, VALOR>) {
		const { chave, valor } = item
		const mapItem = this.obter(chave)
		if (mapItem) {
			mapItem.valor = valor
		} else {
			this.items.push({chave, valor})
		}
	}
	imprimir() {
		console.log(this.items)
	}
	limpar() {
		this.items = []
	}
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave: 1, valor: 'Pedro'})
mapa.colocar({chave: 2, valor: 'Rebeca'})
mapa.colocar({chave: 3, valor: 'Maira'})
mapa.colocar({chave: 1, valor: 'Gustavo'})
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()

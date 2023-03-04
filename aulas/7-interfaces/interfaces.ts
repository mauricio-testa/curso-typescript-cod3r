/**
 * Exclusivo do Typescript!
 * Uma interface é um contrato
 */

interface Humano {
	nome: string,
	idade?: number // atributo opcional
	[prop: string]: any // atributo que eu não sei o nome nem o tipo. pode ser qualquer coisa
	saudar(nome: string): void
}

function saudar(humano: Humano) {
	console.log('Olá ' + humano.nome)
}

const guri: Humano = {
	nome: 'Joao',
	idade: 27,
	saudar() {
		console.log('Olá ' + this.nome)
	},
}

saudar(guri)

//saudar({nome: 'Sem idade'})
//saudar({nome: 'Com atributo dinamico', idade: 10, altura: 120})

// usando classes

class Cliente implements Humano {
	nome: string = ''
	saudar() {
		console.log('Olá ' + this.nome)
	}
}

const clienteOpa = new Cliente()
clienteOpa.nome = 'Sabrina'
clienteOpa.saudar()

// interface para funções

interface FuncaoCalculo {
	(a: number, b: number): number
}

let perimetro: FuncaoCalculo = (a: number, b: number) => (a * 2) + (b * 2)

console.log(perimetro(3, 7))
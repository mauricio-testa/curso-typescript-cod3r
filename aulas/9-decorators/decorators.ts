// tsconfig.json => "experimentalDecorators": true, 

/**
 * Essa função será chamada como decorator assim que a Classe for carregada
 */
function logarClasse(construtor: Function) { // typeof Eletrodomestico == function
	console.log(construtor)
}

/**
 * Essa função retorna um decorator de forma condicional
 */
function logarClasseSe(valor: boolean) {
	return valor ? logarClasse : (_: Function) => {
		console.log('não logar')
	}
}

@logarClasseSe(true)
@classeInterceptor

class Eletrodomestico {
	constructor() {
		console.log('novo')
	}
}

/* *************** Adicionar funcionalidade com decorators *********/
/**
 * O decorator é chamado sempre que a classe é carregada
 * não quando é instanciada
 * 
 * para adicionar um código que vai ser executado em todas as instâncias existe a técnica abaixo
 * ela altera o método construtor da classe Eletrodomestico (pra adicionar funcionalidades) 
 * e extende o construtor original
*/

function classeInterceptor(construtor: {new (...args: any[]) : {}}) {
	console.log('Carregado...')

	construtor.prototype.imprimir = function() {
		console.log('adicionei o método imprimir pelo decorator hehehe')
	}

	return class extends construtor {
		constructor(...args: any[]) {
			console.log('antes...')
			super(...args)
			console.log('depois...')
		}
	}
}


new Eletrodomestico()

/****** decorator de método, atributo e parametro */

class ContaCorrente {

	@naoNegativo
	private saldo: number

	constructor(saldo: number) {
		this.saldo = saldo
	}

	@congelar
	sacar(@paramInfo valor: number) {
		this.saldo -= valor
	}

	@congelar
	getSaldo() {
		return this.saldo
	}
}

const cc = new ContaCorrente(10000)
cc.sacar(8000)
console.log(cc.getSaldo())
cc.sacar(8000)

// metodo
function congelar (alvo: any, metodo: string, descritor: PropertyDescriptor) {
	console.log(alvo, metodo)
	descritor.writable = false
}

// patributo
function naoNegativo (alvo: any, nomePropriedade: string) {
	// deleta a propriedade original e cria uma nova com get set
	delete alvo[nomePropriedade]
	Object.defineProperty(alvo, nomePropriedade, {
		get: function(): any {
			return alvo["_" + nomePropriedade]
		},
		set: function(valor: any): void {
			if (valor < 0) {
				throw new Error ('Não pode ser negatvo')
			} else {
				alvo["_" + nomePropriedade] = valor
			}
		}
	})
}

// parametro
function paramInfo (alvo: any, nomeMetodo: string, indiceParam: number) {
	console.log({alvo, nomeMetodo, indiceParam})
}

interface Animal {
	nome?: string,
	tipo: string
	habitat: string
	pernas?: number
	nascer(): void
}

interface Peixes extends Animal{
	nadar(): void
}

abstract class Baleias implements Peixes {
	tipo: string = 'Aves'
	habitat: string = 'Ar'
	nascer() {
		console.log('nascendo...')
	}
	nadar() {
		console.log('nadando....')
	}
}

class Orca extends Baleias implements Peixes {
	nome: string = 'Orca'
}

const baleia1 = new Orca()
baleia1.nome = 'Chico'
baleia1.nascer()
baleia1.nadar()
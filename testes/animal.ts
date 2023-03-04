
interface Animal {
	nome?: string,
	tipo: string
	habitat: string
	pernas?: number
	identificar(): string,
	nascer(): void
}

// quando uma interface herda outra interface, usa extends
interface Peixes extends Animal{
	nadar(): void
}

// quando uma classe herda uma interface, usa implements
class Baleias implements Peixes {
	public nome: string = ''
	public tipo: string = 'Peixe'
	public habitat: string = 'Mar'
	identificar() {
		return this.nome + ' é um ' + this.tipo + ' e vive no ' + this.habitat
	}
	nascer() {
		console.log(this.identificar() + ' | Está nascendo...')
	}
	nadar() {
		console.log(this.identificar() + ' | Está nadando...')
	}
}


const baleia1 = new Baleias()
baleia1.nome = 'Chico'
baleia1.nascer()
baleia1.nadar()
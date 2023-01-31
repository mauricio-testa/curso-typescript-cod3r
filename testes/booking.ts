console.log("********* TESTE BOOKING **********")

enum CalendarTypes {
	consultant = 1,
	recurrent = 2,
	classroom = 3,
	event = 4,
}

type Group = {
	title: string,
}

type Calendar = {
	title: string,
	description: string|null,
	type: CalendarTypes,
	active: boolean,
	groups: Group[],
	pause: () => boolean,
	resume: () => boolean
}

const calendar1: Calendar = {
	title: 'Cabeleireiro',
	description: null,
	type: CalendarTypes.consultant,
	active: true,
	groups: [
		{ title: 'Corte de cabelo' },
		{ title: 'Corte de barba' },
	],
	pause () {
		this.active = false
		return this.active
	},
	resume (){
		this.active = true
		return this.active
	}
}

calendar1.pause()
console.log(calendar1)
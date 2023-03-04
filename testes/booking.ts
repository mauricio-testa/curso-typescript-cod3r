console.log("********* TESTE BOOKING **********")

console.log("**** Tipos ****")

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

console.log("**** Classes ****")

// model de calendarios individuais (consultant, recorrent)
type Schedule = {
	start: Date,
	end: Date,
	zoom_link: string
}
// model de calendarios em grupo (event, classroom)
type Classe = {
	zoom_link: string,
	zoom_enabled: boolean,
}

// class raíz
abstract class Grupo<Model> {
	constructor (public row: Model) {}
	abstract getZoomEnabled(): boolean
}

// Single calendars pra zoom estar habilitado precisa ter um link na Schedule
class Consultant extends Grupo<Schedule> {
	getZoomEnabled(): boolean {
		return !!this.row.zoom_link
	}
}

// Grouped calendars pra zoom estar habilitado precisa estar zoom_enabled e ter link na Classe
class Classroom extends Grupo<Classe> {
	getZoomEnabled(): boolean {
		return this.row.zoom_enabled && !!this.row.zoom_link
	}
}

console.log(new Consultant({start: new Date, end: new Date, zoom_link: 'zoom.com/1'}).getZoomEnabled())
console.log(new Classroom({zoom_enabled: true, zoom_link: 'zoom.com/2'}).getZoomEnabled())
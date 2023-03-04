"use strict";
console.log("********* TESTE BOOKING **********");
console.log("**** Tipos ****");
var CalendarTypes;
(function (CalendarTypes) {
    CalendarTypes[CalendarTypes["consultant"] = 1] = "consultant";
    CalendarTypes[CalendarTypes["recurrent"] = 2] = "recurrent";
    CalendarTypes[CalendarTypes["classroom"] = 3] = "classroom";
    CalendarTypes[CalendarTypes["event"] = 4] = "event";
})(CalendarTypes || (CalendarTypes = {}));
const calendar1 = {
    title: 'Cabeleireiro',
    description: null,
    type: CalendarTypes.consultant,
    active: true,
    groups: [
        { title: 'Corte de cabelo' },
        { title: 'Corte de barba' },
    ],
    pause() {
        this.active = false;
        return this.active;
    },
    resume() {
        this.active = true;
        return this.active;
    }
};
calendar1.pause();
console.log(calendar1);
console.log("**** Classes ****");
// class raíz
class Grupo {
    constructor(row) {
        this.row = row;
    }
}
// Single calendars pra zoom estar habilitado precisa ter um link na Schedule
class Consultant extends Grupo {
    getZoomEnabled() {
        return !!this.row.zoom_link;
    }
}
// Grouped calendars pra zoom estar habilitado precisa estar zoom_enabled e ter link na Classe
class Classroom extends Grupo {
    getZoomEnabled() {
        return this.row.zoom_enabled && !!this.row.zoom_link;
    }
}
console.log(new Consultant({ start: new Date, end: new Date, zoom_link: 'zoom.com/1' }).getZoomEnabled());
console.log(new Classroom({ zoom_enabled: true, zoom_link: 'zoom.com/2' }).getZoomEnabled());

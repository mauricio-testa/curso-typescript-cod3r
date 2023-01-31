"use strict";
console.log("********* TESTE BOOKING **********");
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

"use strict";
// quando uma classe herda uma interface, usa implements
class Baleias {
    constructor() {
        this.nome = '';
        this.tipo = 'Peixe';
        this.habitat = 'Mar';
    }
    identificar() {
        return this.nome + ' é um ' + this.tipo + ' e vive no ' + this.habitat;
    }
    nascer() {
        console.log(this.identificar() + ' | Está nascendo...');
    }
    nadar() {
        console.log(this.identificar() + ' | Está nadando...');
    }
}
const baleia1 = new Baleias();
baleia1.nome = 'Chico';
baleia1.nascer();
baleia1.nadar();

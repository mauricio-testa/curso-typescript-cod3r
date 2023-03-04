"use strict";
class Baleias {
    constructor() {
        this.tipo = 'Aves';
        this.habitat = 'Ar';
    }
    nascer() {
        console.log('nascendo...');
    }
    nadar() {
        console.log('nadando....');
    }
}
class Orca extends Baleias {
    constructor() {
        super(...arguments);
        this.nome = 'Orca';
    }
}
const baleia1 = new Orca();
baleia1.nome = 'Chico';
baleia1.nascer();
baleia1.nadar();

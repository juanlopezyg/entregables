"use strict";
class Auto extends Vehiculo {
    constructor(patente, carnet, vtb, puertas) {
        super(patente, carnet, vtb);
        this.puertas = puertas;
    }
    getPuertas() {
        return this.puertas;
    }
    setPuertas(puertas) {
        this.puertas = puertas;
    }
}

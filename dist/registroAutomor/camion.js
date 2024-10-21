"use strict";
class Camion extends Vehiculo {
    constructor(patente, carnet, vtb, capacidadDeCarga) {
        super(patente, carnet, vtb);
        this.capacidadDeCarga = capacidadDeCarga;
    }
    getCapacidadCarga() {
        return this.capacidadDeCarga;
    }
    setCapacidadCarga(capacidadDeCarga) {
        this.capacidadDeCarga = capacidadDeCarga;
    }
}

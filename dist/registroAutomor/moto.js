"use strict";
class Moto extends Vehiculo {
    constructor(patente, carnet, vtb, medidaCilindrada) {
        super(patente, carnet, vtb);
        this.medidaCilindrada = medidaCilindrada;
    }
    getMedidaCilindrada() {
        return this.medidaCilindrada;
    }
    setMedidaCilindrada(medidaCilindradas) {
        this.medidaCilindrada;
    }
}

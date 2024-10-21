"use strict";
//Implementar la clase RegistroAutomotor (autos, motos, camiones), y deben de tener loe metodos: get y set;
//Modificar un vehiculo, dar de baja.
class Vehiculo {
    constructor(patente, carnet, vtb) {
        this.patente = patente;
        this.carnet = carnet;
        this.vtb = vtb;
    }
    // Métodos 
    getPatente() {
        return this.patente;
    }
    setPatente(patente) {
        this.patente = patente;
    }
    getCarnet() {
        return this.carnet;
    }
    setCarnet(carnet) {
        this.carnet = carnet;
    }
    getVtb() {
        return this.vtb;
    }
    setVtb(vtb) {
        this.vtb = vtb;
    }
}

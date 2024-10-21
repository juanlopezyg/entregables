"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personajes_1 = require("./Personajes");
class Mago extends Personajes_1.Personaje {
    constructor(nombre, nivel, exp, nivelDeMagia) {
        super(nombre, exp, nivel);
        this.nivelDeMagia = nivelDeMagia;
    }
    getNivelDeMagia() {
        return this.nivelDeMagia;
    }
    setNivelDeMagia(nivelDeMagia) {
        return nivelDeMagia;
    }
}
exports.Mago = Mago;
const mago = new Mago("Harry", 6, 25, 20);
console.log(Mago);

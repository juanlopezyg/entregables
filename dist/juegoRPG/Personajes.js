"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, nivel, exp) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.exp = exp;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre;
    }
    nombrarPersonaje() {
        return `${this.nombre} "de rol" ${this.nivel} "con" ${this.exp} "de exp." `;
    }
}
exports.Personaje = Personaje;

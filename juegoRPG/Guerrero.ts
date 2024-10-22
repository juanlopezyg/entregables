import { Personaje } from "./Personajes";

export class Guerrero extends Personaje {
    private dañoDeEspada: number;

    constructor(nombre: string, nivel: number, exp: number, dañoDeEspada: number) {
        super(nombre, exp, nivel);
        this.dañoDeEspada = dañoDeEspada;
    }
    public getDañoDeEspada(): number {
        return this.dañoDeEspada;  // Método para obtener el daño de espada
    }

    public setDañoDeEspada(dañoDeEspada: number): void {
        this.dañoDeEspada = dañoDeEspada;  // Método para establecer el daño de espada
    }

    public mostrarDetalles(): string {
        return `${this.getNombre()} es un guerrero de nivel ${this.getNivel()} con ${this.getExp()} de experiencia y ${this.getDañoDeEspada()} de daño de espada.`;
    }

    public atacar(): string {
        return `${this.getNombre()} ataca con su espada!`; 
    }

    public defender(): string {
        return `${this.getNombre()} se prepara para defenderse!`;

    }


}
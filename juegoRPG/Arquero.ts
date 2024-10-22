import { Personaje } from "./Personajes";

export class Arquero extends Personaje{
    private DañoADistancia: number;

    constructor(nombre: string, nivel: number, exp: number, dañoADistancia: number) {
        super(nombre, exp, nivel);
        this.DañoADistancia = dañoADistancia;
    }

    public getDañoADistancia():number{
    return this.DañoADistancia;
}

public setDañoADistancia(dañoADistancia:number){
    this.DañoADistancia
}

public mostrarDetalles(): string {
    return `${this.getNombre()} es un arquero de nivel ${this.getNivel()} con ${this.getExp()} de experiencia y ${this.getDañoADistancia()} de daño a distancia.`;
}

public atacar(): string {
    return `${this.getNombre()} dispara con su arco!`; 
}

public defender(): string {
    return `${this.getNombre()} se prepara para defenderse!`;
}

}
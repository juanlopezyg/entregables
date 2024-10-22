import { Arquero } from './Arquero';

export class ArqueroEvolucionado extends Arquero{

    private mejoraDañoADistancia: number= 200.
    private flechasDeFuego: number= 10;

    constructor(nombre: string, nivel: number, exp: number, dañoADistancia: number, mejoraDañoADistancia: number, flechasDeFuego: number) {
        super(nombre, exp, nivel, dañoADistancia);
        this.mejoraDañoADistancia = mejoraDañoADistancia;
        this.flechasDeFuego=flechasDeFuego;
    }

    public getmejoraDañoADistancia():number{
    return this.mejoraDañoADistancia;
}

public setmejoraDañoADistancia(dañoADistancia:number){
    this.mejoraDañoADistancia
}

public getFlechasDeFuego():number{
    return this.flechasDeFuego;
}

public mostrarDetalles(): string {
    return `${this.getNombre()} es un arquero de nivel ${this.getNivel()} con ${this.getExp()} de experiencia, ${this.getmejoraDañoADistancia()} de daño a distancia y con ${this.getFlechasDeFuego()} nuevas flechas de fuego`;
}

public atacar(): string {
    return `${this.getNombre()} dispara con su arco!`; 
}

public defender(): string {
    return `${this.getNombre()} se prepara para defenderse!`;
}

}
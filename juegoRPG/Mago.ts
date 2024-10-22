import { Personaje } from './Personajes';

export class Mago extends Personaje {
    private nivelDeMagia: number;

    constructor(nombre:string, nivel:number, exp:number, nivelDeMagia:number){
        super(nombre, exp, nivel);
        this.nivelDeMagia=nivelDeMagia;
    }

    public getNivelDeMagia():number{
       return this.nivelDeMagia;
    }

    public setNivelDeMagia(nivelDeMagia:number):void{
        this.nivelDeMagia;

    }
    public mostrarDetalles(): string {
        return `${this.getNombre()} es un mago de nivel ${this.getNivel()} con ${this.getExp()} de experiencia y ${this.nivelDeMagia} de magia.`;
    }

    public atacar(): string {
        return `${this.getNombre()} lanza un hechizo!`;
    }

    public defender(): string {
        return `${this.getNombre()} conjura un escudo mágico!`;
    }

}


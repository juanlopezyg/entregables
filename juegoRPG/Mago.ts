import { Personaje } from './Personajes';

export class Mago extends Personaje {
    private nivelDeMagia: number;

    constructor(nombre:string, nivel:number, exp:number, nivelDeMagia:number){
        super(nombre, exp, nivel);
        this.nivelDeMagia=nivelDeMagia;
    }

    getNivelDeMagia():number{
       return this.nivelDeMagia;
    }

    setNivelDeMagia(nivelDeMagia:number):void{
        this.nivelDeMagia;

    }
    mostrarDetalles(): string {
        return `${this.getNombre()} es un mago de nivel ${this.getNivel()} con ${this.getExp()} de experiencia y ${this.nivelDeMagia} de magia.`;
    }

    atacar(): string {
        return `${this.getNombre()} lanza un hechizo!`;
    }

    defender(): string {
        return `${this.getNombre()} conjura un escudo mágico!`;
    }

}


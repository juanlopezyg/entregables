import { Persona } from "./Persona.ts" // jugador va a ser hijo de persona, entonces le importamos la clase. Eso es herencia.

export class Jugador extends Persona { //las clases son siempre singulares
    private camiseta: number;
    private posicion: string;
    private esCapitan: boolean;

    //constructor de clase jugador
    constructor(camiseta: number, posicion: string, esCapitan: boolean, nombre: string, apellido: string, fechaDeNacimiento: number, numeroDePasaporte: number) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.camiseta = camiseta;
        this.posicion = posicion;
        this.esCapitan = esCapitan;
    }
    
    //getters
    
    public getCamiseta(): number {
        return this.camiseta;
    }
    
    //setters
    
    public setCamiseta(camiseta:number): void{
        this.camiseta= camiseta;
    }

    public setEsCapitan(esCapitan:boolean): void{
        this.esCapitan= esCapitan;
    }
}


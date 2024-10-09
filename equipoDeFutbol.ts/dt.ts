import { Persona } from "./Persona";
import { Jugador } from "./Jugador";

export class Dt extends Persona {
private arrJugadores: Jugador [];
private capitan: Jugador;


    constructor(nombre:string, apellido:string, numeroDePasaporte: number, fechaDeNacimiento:number, arrJug: Jugador[]) {
        super(nombre, apellido, numeroDePasaporte, fechaDeNacimiento)
        this.arrJugadores=arrJug;
    }

//metedo
 public cambiarCapitan(jugador: Jugador){

    //para cambiar de capitan primero le saco la capitania a todos
    for (let i = 0; i < this.arrJugadores.length; i++) {
        this.arrJugadores[i].setEsCapitan(false);   
    }
    jugador.setEsCapitan(true);
}

/*ejemplo si quisiera acceder al dni
let jugador= this.arrJugadores.find(jugador=>jugador.getNumeroDePasaporte()===5000000)*/
} 
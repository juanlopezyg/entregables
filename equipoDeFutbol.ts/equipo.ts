import { Jugador } from "./Jugador";
import { Dt } from "./dt";

export class Equipo{
private nombre:string;
private dt:Dt;
private jugadores: Jugador[];


constructor(nombre:string, dt:Dt, jugadores:Jugador[]){
this.nombre=nombre;
this.dt=dt;
this.jugadores=jugadores;

}

}

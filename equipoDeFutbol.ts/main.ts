import { Jugador } from "./Jugador";
import { Dt } from "./dt";
import { Equipo } from "./equipo";

let arquero: Jugador = new Jugador(1, "arquero", true, "Juan", "perez", 44692970, 13/3/2003);
let defensa: Jugador= new Jugador(1, "defensa", false, "Pedro", "martin", 45692970, 12/5/2003);
let atacante: Jugador= new Jugador(1, "atacante", false, "Jose", "lopez",46692970, 7/2/2002);

let arrJugadores: Jugador[]= [arquero, defensa, atacante];

let director: Dt = new Dt("pepe", "lopez", 1200000, 12/2/1999, arrJugadores);

let equipo: Equipo= new Equipo("cebollitas", director, arrJugadores);

console.log(equipo.getNumeroDePasaporte());
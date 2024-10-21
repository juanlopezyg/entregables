import { Mago } from './Mago';
import { Guerrero } from './Guerrero';
import { Arquero } from "./Arquero";

const mago = new Mago("Harry", 6, 25, 20); 
  
console.log(mago.mostrarDetalles());
console.log(mago.atacar());
console.log(mago.defender());

const guerrero = new Guerrero("Juan", 10, 100, 30);
console.log(guerrero.mostrarDetalles());  
console.log(mago.atacar());
console.log(mago.defender());

const arquero= new Arquero ("Luciano", 9, 40, 25)
console.log(arquero.mostrarDetalles())
console.log(arquero.atacar());
console.log(arquero.defender());

 console.log ("Luciano aumenta de nivel!", arquero.getNivel() + 1);
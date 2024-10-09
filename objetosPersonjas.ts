
/*class Persona{
    //propiedades o variables internas.
private altura:number;
 private peso:number;
 private nombre:string;
 private sexo: String;
 private dni:number;

//metodos
public getAltura():number{
    return this.altura; //this para ahcer referencia a las variables internas.
}

 public getPeso():number{
    return this.peso;
 }

public getNombre():string{
    return this.nombre;
 }
public setNombre (parNombre:string):void
{
    this.nombre
}



public caminar():string{
    return "caminando";
}

public hablar():string{
    return "bla bla bla";
}

public dormir():string{
    return "zzz"
}

}*/

//ejemplo ahora de Televisor, y metedos set y get para encapsular o tomar esos valores.

class Televisor {
    //atributos o variables internas
    private decodificador : Decodificador;
    private canal: number ;
    private volumen: number;
    private estaPrendido: boolean = false;
    constructor(canal: number, volumnen: number, decodificador: Decodificador, estaPrendido?: boolean) {
        this.canal = canal;
        this.volumen = volumnen;
        this.decodificador = decodificador;
        if(estaPrendido != undefined) {
            this.estaPrendido = estaPrendido;
        }
    }

    //encapsulamiento
    getCanal(): number {
        return this.canal;
    }
    setCanal(nuevoCanal: number): void {
            this.canal = nuevoCanal;
    }
    
}

//composicion
class Decodificador {
    private decodificador: string;
    constructor(nombreDecodificador : string) {
        this.decodificador = nombreDecodificador;
    }
    getDeco(): string {
        return this.decodificador;
    }
}
const deco = new Decodificador("Decodificador");
//nueva instancia
const televisor = new Televisor(10, 50, deco, true);
// televisor.canal = 25;   NO
// console.log(televisor.getCanal());
// televisor.setCanal(25);
// console.log(televisor.getCanal());
console.log(televisor)
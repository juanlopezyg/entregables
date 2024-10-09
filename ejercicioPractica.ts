export class Persona{
    private nombre: string;
private apellido: string;
private numeroDePasaporte: number;
private fechaDeNacimiento: number;

}


class Seleccion{
private futbolistas: Futbolistas[] = [];
private entrenador: Entrenador[] = []; //atributos
private masajista: Masajista[] = [];


}


// clases de los atributos
class Futbolistas{
private nombre: string;
private apellido: string;
private numeroDePasaporte: number;
private fechaDeNacimiento: number;

constructor(nombre:string, apellido:string, numeroDePasaporte:number, fechaDeNacimiento:number){
this.nombre= nombre;
this.apellido=apellido;
this.numeroDePasaporte= numeroDePasaporte;
this.fechaDeNacimiento= fechaDeNacimiento;
}


}

class Entrenador{
    private nombre: string;
private apellido: string;
private numeroDePasaporte: number;
private fechaDeNacimiento: number;

}

class Masajista{
    private nombre: string;
    private apellido: string;
    private numeroDePasaporte: number;
    private fechaDeNacimiento: number;

}
export class Persona {
    private nombre: string;
    private apellido: string;
    private numeroDePasaporte: number;
    private fechaDeNacimiento: number;

    constructor(Nombre: string, Apellido: string, NumeroDePasaporte: number, FechaDeNacimiento: number) {
        this.nombre = Nombre;
        this.apellido = Apellido;
        this.numeroDePasaporte = NumeroDePasaporte;
        this.fechaDeNacimiento = FechaDeNacimiento;
    }

//getters
public getNombre(): string{
    return this.nombre;
}

public getNumeroDePasaporte(): number{
    return this.numeroDePasaporte;
}


    //setters
    public setNombre (nombre:string){
        this.nombre=nombre;
    }

    public setNumeroDePasaporte (numeroDePasaporte:number){
        this.numeroDePasaporte=numeroDePasaporte;
    }


}
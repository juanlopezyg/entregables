class Moto extends Vehiculo {
private medidaCilindrada:number;

    constructor(patente: string, carnet: string, vtb: number, medidaCilindrada:number) {
        super(patente, carnet, vtb);
        this.medidaCilindrada=medidaCilindrada;
    }

    public getMedidaCilindrada():number{
        return this.medidaCilindrada;
    }

public setMedidaCilindrada(medidaCilindradas:number):void{
    this.medidaCilindrada;
}

}
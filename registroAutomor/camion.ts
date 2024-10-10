class Camion extends Vehiculo {
private capacidadDeCarga:number;

    constructor(patente: string, carnet: string, vtb: number, capacidadDeCarga:number) {
        super(patente, carnet, vtb);
        this.capacidadDeCarga=capacidadDeCarga;
    }

public getCapacidadCarga():number{
    return this.capacidadDeCarga;
}

public setCapacidadCarga(capacidadDeCarga:number):void{
    this.capacidadDeCarga=capacidadDeCarga;
}

}
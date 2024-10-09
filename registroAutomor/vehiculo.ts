//Implementar la clase RegistroAutomotor (autos, motos, camiones), y deben de tener loe metodos: get y set;
//Modificar un vehiculo, dar de baja.

class Vehiculo { // Clase padre
    private patente: string;
    private carnet: string;
    private vtb: number;

    constructor(patente: string, carnet: string, vtb: number) {
        this.patente = patente;
        this.carnet = carnet;
        this.vtb = vtb;
    }

    // Métodos 
    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public getCarnet(): string {
        return this.carnet;
    }

    public setCarnet(carnet: string): void {
        this.carnet = carnet;
    }

    public getVtb(): number {
        return this.vtb;
    }

    public setVtb(vtb: number): void {
        this.vtb = vtb;
    }
}

class Auto extends Vehiculo {
    private puertas: number;

    constructor(patente: string, carnet: string, vtb: number, puertas: number) {
        super(patente, carnet, vtb);
        this.puertas = puertas;
    }

    public getPuertas(): number {
        return this.puertas;
    }

    public setPuertas(puertas: number): void {
        this.puertas = puertas;
    }

}

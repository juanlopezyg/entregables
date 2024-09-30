//Implementar la clase RegistroAutomotor (autos, motos, camiones), y deben de tener loe metodos: get y set;
//Modificar un vehiculo, dar de baja.

class RegistroAutomotor {
    private motos: Motos[] = [];
    private camiones: Camiones[] = [];  //atributos 
    private autos: Autos[] = [];

    // metodos para agregar vehículos
    public agregarMoto(moto: Motos): void {
        this.motos.push(moto);
    }

    public agregarCamion(camion: Camiones): void {
        this.camiones.push(camion);
    }

    public agregarAuto(auto: Autos): void {
        this.autos.push(auto);
    }

    // metodos para obtener vehículos
    public getMotos(): Motos[] {
        return this.motos;
    }

    public getCamiones(): Camiones[] {
        return this.camiones;
    }

    public getAutos(): Autos[] {
        return this.autos;
    }

    // metodo para dar de baja un vehículo
    public darDeBajaMoto(index: number): void {
        if (index >= 0 && index < this.motos.length) {
            this.motos.splice(index, 1);
        }
    }

    public darDeBajaCamion(index: number): void {
        if (index >= 0 && index < this.camiones.length) {
            this.camiones.splice(index, 1);
        }
    }

    public darDeBajaAuto(index: number): void {
        if (index >= 0 && index < this.autos.length) {
            this.autos.splice(index, 1);
        }
    }
}

//creo las clases motos, camiones y autos con sus get y set.
class Motos {
    private patente: string;
    private carnet: string;
    private vtb: number;

    constructor(patente: string, carnet: string, vtb: number) {
        this.patente = patente;
        this.carnet = carnet;
        this.vtb = vtb;
    }

    // get y set.
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

class Camiones {
    private patente: string;
    private carnet: string;
    private vtb: number;

    constructor(patente: string, carnet: string, vtb: number) {
        this.patente = patente;
        this.carnet = carnet;
        this.vtb = vtb;
    }

    // get y set
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

class Autos {
    private patente: string;
    private carnet: string;
    private vtb: number;

    constructor(patente: string, carnet: string, vtb: number) {
        this.patente = patente;
        this.carnet = carnet;
        this.vtb = vtb;
    }

    // get y set
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


const registro = new RegistroAutomotor();
const moto1 = new Motos("ABC123", "C1", 12);
const camion1 = new Camiones("XYZ789", "C2", 15);
const auto1 = new Autos("LMN456", "C3", 20);

registro.agregarMoto(moto1);
registro.agregarCamion(camion1);
registro.agregarAuto(auto1);

console.log(registro.getMotos());
console.log(registro.getCamiones());
console.log(registro.getAutos());

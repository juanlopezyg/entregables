//clase padre
class Vehiculo {
    protected patente: string;
    protected carnet: string;

    constructor(patente: string, carnet: string) {
        this.patente = patente;
        this.carnet = carnet;
    }

    public getPatente(): string { //getters y setters
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
}

//clases hijas
class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(patente: string, carnet: string, cilindrada: number) {
        super(patente, carnet);
        this.cilindrada = cilindrada;
    }

    public getCilindrada(): number {
        return this.cilindrada;
    }

    public setCilindrada(cilindrada: number): void {
        this.cilindrada = cilindrada;
    }
}

class Camion extends Vehiculo {
    private capacidadCarga: number;

    constructor(patente: string, carnet: string, capacidadCarga: number) {
        super(patente, carnet);
        this.capacidadCarga = capacidadCarga;
    }

    public getCapacidadCarga(): number {
        return this.capacidadCarga;
    }

    public setCapacidadCarga(capacidadCarga: number): void {
        this.capacidadCarga = capacidadCarga;
    }
}

class Auto extends Vehiculo {
    private cantidadPuertas: number;

    constructor(patente: string, carnet: string, cantidadPuertas: number) {
        super(patente, carnet);
        this.cantidadPuertas = cantidadPuertas;
    }

    public getCantidadPuertas(): number {
        return this.cantidadPuertas;
    }

    public setCantidadPuertas(cantidadPuertas: number): void {
        this.cantidadPuertas = cantidadPuertas;
    }
}

class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    //metodos
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public darDeBajaVehiculo(patente: string): void {
        const vehiculoEncontrado = this.vehiculos.find(vehiculo => vehiculo.getPatente() === patente);
        if (vehiculoEncontrado) {
            this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.getPatente() !== patente);
            console.log(`Vehículo con patente ${patente} eliminado.`);
        } else {
            console.log(`No se pudo encontrar el vehículo con patente ${patente}.`);
        }
    }

    public modificarVehiculo(patente: string, vehiculoModificado: Vehiculo): void {
        const index = this.vehiculos.findIndex(vehiculo => vehiculo.getPatente() === patente);
        if (index !== -1) {
            this.vehiculos[index] = vehiculoModificado;
            console.log(`Vehículo con patente ${patente} modificado.`);
        } else {
            console.log(`No se pudo encontrar el vehículo con patente ${patente}.`);
        }
    }

    public listarVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }
}


const registro = new RegistroAutomotor();
const moto1 = new Moto("ABC123", "C1", 150);
const camion1 = new Camion("XYZ789", "C2", 2000);
const auto1 = new Auto("LMN456", "C3", 4);

registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);
registro.agregarVehiculo(auto1);

console.log("Lista de vehículos:", registro.listarVehiculos());
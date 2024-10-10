
class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public getVehiculos(): Vehiculo[] {
        return this.vehiculos;
    }

    // modificar un vehículo por patente, tras buscar si existe
    public modificarVehiculo(patente: string, nuevosDatos: { patente?: string, carnet?: string, vtb?: number }): void {
        const vehiculo = this.vehiculos.find(v => v.getPatente() === patente);

        if (vehiculo) {
            // si encuentra el vehículo, se actualizan los datos
            if (nuevosDatos.patente !== undefined) {
                vehiculo.setPatente(nuevosDatos.patente);
            }
            if (nuevosDatos.carnet !== undefined) {
                vehiculo.setCarnet(nuevosDatos.carnet);
            }
            if (nuevosDatos.vtb !== undefined) {
                vehiculo.setVtb(nuevosDatos.vtb);
            }
        } else {
            console.log(`No se pudo encontrar el vehículo con patente: ${patente}`);
        }
    }

    // elimina un vehículo por patente, tras buscar si existe
    public darDeBajaVehiculo(patente: string): void {
        const vehiculoIndex = this.vehiculos.findIndex(v => v.getPatente() === patente);

        if (vehiculoIndex !== -1) {
            this.vehiculos.splice(vehiculoIndex, 1); // Elimina el vehículo si lo encuentra
        } else {
            console.log(`No se pudo encontrar el vehículo con patente: ${patente}`);
        }
    }
}

// crear instancia del registro
const registro = new RegistroAutomotor();


// modificar la moto cambiando la patente y el carnet
registro.modificarVehiculo("ABC123", { patente: "XYZ999", carnet: "C2" });

// eliminar un vehículo
registro.darDeBajaVehiculo("XYZ999");

// mostrar vehículos para verificar los cambios
console.log(registro.getVehiculos());

//cantidad de puertas del auto
const auto = new Auto("LMN456", "C3", 20, 4);
console.log(`El auto tiene ${auto.getPuertas()} puertas.`);

//cantidad de carga del camion
const camion = new Camion("XYZ123", "C1", 30, 10);
console.log(`El camión tiene una capacidad de carga de ${camion.getCapacidadCarga()} toneladas.`);

//cilindrada de la motop
const moto = new Moto("DEF789", "C2", 15, 150);
console.log(`La cilindrada de la moto es de: ${moto.getMedidaCilindrada()}.`);

// agregar vehículos
registro.agregarVehiculo(moto);
registro.agregarVehiculo(auto);
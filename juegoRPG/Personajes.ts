export class Personaje {
private nombre: string;
private nivel:number= 100;
private exp: number;

constructor(nombre:string, nivel:number, exp:number){
this.nombre=nombre;
this.nivel=nivel;
this.exp=exp;
}

public getNombre():string{
    return this.nombre
}

public setNombre(nombre:string){
    this.nombre;
}

public getNivel(): number {
    return this.nivel;  
}

public getExp(): number {
    return this.exp;  
}

public atacar(): string {
    return `${this.nombre} ataca`;
}

public defender(): string {
    return `${this.nombre} se defiende`;
}

}


export class Personaje {
private nombre: string;
private nivel:number= 100;
private exp: number;

constructor(nombre:string, nivel:number, exp:number){
this.nombre=nombre;
this.nivel=nivel;
this.exp=exp;
}

getNombre():string{
    return this.nombre
}

setNombre(nombre:string){
    this.nombre;
}

getNivel(): number {
    return this.nivel;  
}

getExp(): number {
    return this.exp;  
}

atacar(): string {
    return `${this.nombre} ataca`;
}

defender(): string {
    return `${this.nombre} se defiende`;
}

}


export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;

    constructor(nombre: string, apellido: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = "../../../assets/" + nombre + apellido + ".jpg";
    }
}
export class Estudios {
    id?: number;
    nombreS: string;
    almaMaterS: string;
    fechaS: string;
    descripcionS: string;

    constructor(nombreS: string, almaMaterS:string, fechaS: string, descripcionS: string) {
        this.nombreS = nombreS;
        this.almaMaterS = almaMaterS;
        this.fechaS = fechaS;
        this.descripcionS = descripcionS;
    }
}

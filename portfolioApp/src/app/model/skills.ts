export class Skills {
    id?: number;
    nombreSk: string;
    progresoSk: number;

    constructor(nombreSk: string, progresoSk: number) {
        this.nombreSk = nombreSk;
        this.progresoSk = progresoSk;
    }
}

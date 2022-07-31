export class Projects {
    id?: number;
    nombreP: string;
    descripcionP: string;

    constructor(nombreP: string, descripcionP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
    }
}
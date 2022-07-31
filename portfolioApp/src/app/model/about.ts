export class About {
    id?: number;
    descripcion: string;
    profesion: string;

    constructor(descripcion: string, profesion: string) {
        this.profesion = profesion;
        this.descripcion = descripcion;
    }
}

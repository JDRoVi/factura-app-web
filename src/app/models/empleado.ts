export class Empleado {
    constructor(
        public id: number,
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public correo: string,
        public tipo: number
    ) { }
}
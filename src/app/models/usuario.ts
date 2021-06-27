export class Usuario {
    constructor(
        public id: number,
        public idEmpleado: number,
        public nombreUsuario: string,
        public password: string,
        public nivelUsuario: number
    ) { }
}
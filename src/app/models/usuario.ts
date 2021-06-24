export class Usuario {
    constructor(
        public id: number,
        public idEmpleado: number,
        public nombreUsuario: string,
        public contrasena: string,
        public nivelUsuario: number
    ) { }
}
export class Usuario {
    constructor(
        public id: number,
        public nombreUsuario: string,
        public password: string,
        public nivelUsuario: number
    ) { }
}
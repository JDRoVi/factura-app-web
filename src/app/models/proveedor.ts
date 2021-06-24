export class Proveedor {
    constructor(
        public id: number,
        public idEmpleado: number,
        public nombre: string,
        public cedulaJuridica: number,
        public direccion: string,
        public volumenVentas: string
    ) { }
}
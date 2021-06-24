export class Venta {
    constructor(
        public id: number,
        public idCajero: number,
        public idCliente: number,
        public idDetalle: number,
        public fecha: any,
        public total: number
    ) { }
}
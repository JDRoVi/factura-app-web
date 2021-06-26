export class Venta {
    constructor(
        public id: number,
        public idCajero: number,
        public idCliente: number,
        public idDetalleVenta: number,
        public fecha: any,
        public total: number
    ) { }
}
export class DetalleVenta {
    constructor(
        public id: number,
        public codigoProducto: number,
        public idVenta: number,
        public precioUnidad: number,
        public cantidad: number,
        public subtotal: number,
        public descuento: number
    ) { }
}
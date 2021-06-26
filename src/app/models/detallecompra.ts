export class DetalleCompra {
    constructor(
        public id: number,
        public idProducto: number,
        public idCompra: number,
        public precioUnidad: number,
        public cantidad: number,
        public subtotal: number
    ) { }
}
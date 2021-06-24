export class Producto {
    constructor(
        public id: number,
        public codigoProducto: number,
        public idProveedor: number,
        public nombre: string,
        public cantidad: number,
        public fechaCaducidad: any,
        public precioUnidad: number
    ) { }
}
export class Compra {
    constructor(
        public id: number,
        public idBodeguero: number,
        public idProveedor: number,
        public idDetalle: number,
        public fecha: any,
        public total: number
    ) { }
}
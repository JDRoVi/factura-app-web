export class Compra {
    constructor(
        public id: number,
        public idBodeguero: number,
        public idDetalle: number,
        public idProveedor: number,
        public fecha: any,
        public total: number
    ) { }
}
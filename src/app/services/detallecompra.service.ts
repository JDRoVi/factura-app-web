import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { DetalleCompra } from '../models/detallecompra';

@Injectable() export class DetalleCompraService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(purchDetail: DetalleCompra): Observable<any> {
        let data = JSON.stringify(purchDetail);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'purchasedetails', params, { headers: httpHeaders });
    }

    getDetails(): Observable<any> {
        let httpHeader = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.get(this.url+'purchasedetails',{ headers: httpHeader});
    }
}
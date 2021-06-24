import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { DetalleCompra } from '../models/detallecompra';

@Injectable() export class DetalleVentaService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(user: DetalleCompra): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'purchasedetails', params, { headers: httpHeaders });
    }
}
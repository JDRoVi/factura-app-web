import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { DetalleVenta } from '../models/detalleventa';

@Injectable() export class DetalleVentaService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(selldetail: DetalleVenta): Observable<any> {
        let data = JSON.stringify(selldetail);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'selldetails', params, { headers: httpHeaders });
    }
}
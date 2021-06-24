import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { Venta } from '../models/venta';

@Injectable() export class VentaService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(user: Venta): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'sell', params, { headers: httpHeaders });
    }
    getSells(): Observable<any> {
        let httpHeader = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.get(this._http + 'sell', { headers: httpHeader });
    }
}
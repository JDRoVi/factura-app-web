import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { Proveedor } from '../models/proveedor';

@Injectable() export class ProveedorService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(user: Proveedor): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'provider', params, { headers: httpHeaders });
    }
    getProviders(): Observable<any> {
        let httpHeader = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.get(this._http + 'provider', { headers: httpHeader });
    }
    getProvider(id: string): Observable<any> {
        return this._http.get(this.url + 'provider/' + id)
    }
}
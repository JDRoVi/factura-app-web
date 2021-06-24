import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { Cliente } from '../models/cliente';

@Injectable() export class ClienteService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(user: Cliente): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'client', params, { headers: httpHeaders });
    }
    getClients(): Observable<any> {
        let httpHeader = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.get(this._http + 'client', { headers: httpHeader });
    }
    getClient(id: string): Observable<any> {
        return this._http.get(this.url + 'client/' + id)
    }
}
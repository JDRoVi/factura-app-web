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
    register(client: Cliente): Observable<any> {
        let data = JSON.stringify(client);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.url + 'client', params, { headers: httpHeaders });
    }
    getClients(): Observable<any> {
        let httpHeader = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        const getClients = this._http.get(this.url + 'client', { headers: httpHeader });
        return getClients;
    }
    getClient(id: string): Observable<any> {
        return this._http.get(this.url + 'client/' + id)
    }
}
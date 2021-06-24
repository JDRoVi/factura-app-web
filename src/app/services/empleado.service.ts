import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { Empleado } from '../models/empleado';

@Injectable() export class EmpleadoService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(user: Empleado): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'employee', params, { headers: httpHeaders });
    }
    getEmployees(): Observable<any> {
        let httpHeader = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.get(this._http + 'employye', { headers: httpHeader });
    }
    getEmployee(id: string): Observable<any> {
        return this._http.get(this.url + 'employee/' + id)
    }
}
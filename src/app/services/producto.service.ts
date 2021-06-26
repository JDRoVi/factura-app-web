import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { Producto } from '../models/producto';

@Injectable() export class ProductoService {
    private url: string;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
    }
    register(user: Producto): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'product', params, { headers: httpHeaders });
    }
    getProducts(): Observable<any> {
        let httpHeader = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        const getProducts = this._http.get(this.url + 'product', { headers: httpHeader });
        return getProducts;
    }
    getProduct(id: string): Observable<any> {
        return this._http.get(this.url + 'product/' + id)
    }
}
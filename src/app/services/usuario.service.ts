import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './configuration';
import { Usuario } from '../models/usuario';

@Injectable() export class UsuarioService {
    private url: string;
    public token: any;
    public identity: any;
    constructor(public _http: HttpClient) {
        this.url = global.urlApi;
        this.token = null;
        this.identity = null;
    }
    register(user: Usuario): Observable<any> {
        let data=JSON.stringify(user);
        let params='json='+data;
        let httpHeaders=new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'user',params,{headers:httpHeaders});
    }
    signin(user: Usuario): Observable<any> {
        let data = JSON.stringify(user);
        let params = 'json=' + data;
        let httpHeaders = new HttpHeaders().set('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.post(this.url + 'user/login', params, { headers: httpHeaders });
    }
    signup(user: Usuario): Observable<any>{

        let json = JSON.stringify(user);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'user/login', params, {headers:headers});
    }
    public getToken() {
        let tk = localStorage.getItem('token');
        if (tk && tk != 'undefined') {
            this.token = tk;
        } else {
            this.token = null;
        }
    }
    public getIdentity() {
        let idTemp = localStorage.getItem('identity');
        if (idTemp && idTemp != 'undefined') {
            this.identity = JSON.parse(idTemp);
        } else {
            this.identity = null;
        }
        return this.identity;

    }
    public loadIdentity() {
        let httpHeaders = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded').append('token', this.token);
        return this._http.post(this.url + 'user/getidentity', null, { headers: httpHeaders });
    }
    getUsers(): Observable<any> {
        let httpHeader = new HttpHeaders().append('Content-Type', 'aplication/x-www-from-urlencoded');
        return this._http.get(this.url + 'user', { headers: httpHeader });
    }
    getUser(id: string): Observable<any> {
        return this._http.get(this.url + 'user/' + id)
    }
}
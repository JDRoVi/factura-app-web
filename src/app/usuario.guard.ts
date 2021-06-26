import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import{ UsuarioService } from './services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _usuarioService: UsuarioService,

){}

canActivate(){
    let identityClient   = this._usuarioService.getIdentity();

    if(identityClient){
        return true;
    }else{
        this._router.navigate(['/error']);
        return false;
    }
}
  
}

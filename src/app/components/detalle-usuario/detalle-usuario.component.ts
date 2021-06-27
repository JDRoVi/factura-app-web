import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css'],
  providers: [UsuarioService]
})
export class DetalleUsuarioComponent implements OnInit {
  public user: Usuario;
  public url: string;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.urlApi;
    this.user = new Usuario(1, 1, "", "", 1);
  }

  ngOnInit(): void {
  }

  getUser(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._usuarioService.getUser(id).subscribe(
          response => {
            if (response.code == 200) {
              this.user = response.data;
            }
          }, error => {
            this._router.navigate(['**']);
          }
        )
      }, error => {
        this._router.navigate(['**']);
      }
    );
  }
}
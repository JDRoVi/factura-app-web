import { Component, OnInit } from '@angular/core';
import { global } from '../../services/configuration';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
  providers: [UsuarioService]
})
export class ListaUsuariosComponent implements OnInit {
  public usuarios: Array<Usuario>
  public url: string;

  constructor(private _usuarioService: UsuarioService) {
    this.usuarios = [];
    this.url = global.urlApi;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getUsers();
  }

  getUsers() {
    this._usuarioService.getUsers().subscribe(
      response => {
        if (response.code == 200) {
          this.usuarios = response.data;
        }
      }, error => { }
    );
  }
}

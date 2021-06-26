import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css'],
  providers: [UsuarioService]
})
export class AgregarUsuarioComponent implements OnInit {
  public user: Usuario;
  public status: number;

  constructor(private _usuarioService: UsuarioService) {
    this.user = new Usuario(1, "", "", 1);
    this.status = -1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let counter =timer(5000);
    this._usuarioService.register(this.user).subscribe(
      response => {
        if (response.code == 200) {
          this.status = 0;
          counter.subscribe(n => { this.status = -1 });
          form.reset();
        } else {
          this.status = 1;
        }
      }, error => {
        if (error.status == 406) {
          this.status = 2;
          counter.subscribe(n => { this.status = -1 });
        }
      }
    );
  }
}
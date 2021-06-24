import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public user: Usuario;
  public status: number;
  public token: any;
  public identity: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _routes: ActivatedRoute
  ) {
    this.user = new Usuario(1, 1, "", "", 1);
    this.status = -1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._usuarioService.signin(this.user).subscribe(
      response => {
        if (response.status != "error") {
          this.token = response;
          localStorage.setItem("token", this.token);
          this._usuarioService.getToken();
          this._usuarioService.loadIdentity().subscribe(
            response => {
              this.identity = JSON.stringify(response);
              localStorage.setItem("identity", this.identity);
            }, error => {
              this.identity = null;
            }
          )
          form.reset();
          this._router.navigate(['']);
        }
      }, error => {
        this.status = 1;
      }
    );
  }
}

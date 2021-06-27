import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css'],
  providers: [UsuarioService,EmpleadoService]
})
export class AgregarUsuarioComponent implements OnInit {
  public user: Usuario;
  public status: number;
  public employes:any;

  constructor(private _usuarioService: UsuarioService,private _employeService:EmpleadoService) {
    this.user = new Usuario(1, 1, "", "", 1);
    this.status = -1;
    this.loadEmployes();
  }

  public loadEmployes() {
    this._employeService.getEmployees().subscribe(
      response => {
        console.log(response);
        if (response.code == 200) {
          this.employes = response.data;
        }
      },
        error => {
          this.employes = null;
          console.log(error);
        }
    );
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
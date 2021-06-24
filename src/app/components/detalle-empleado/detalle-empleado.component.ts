import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css'],
  providers: [EmpleadoService]
})
export class DetalleEmpleadoComponent implements OnInit {
  public employee: Empleado
  public url: string

  constructor(
    private _empleadoService: EmpleadoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.urlApi;
    this.employee = new Empleado(1, "", "", "", "", 1);
  }

  ngOnInit(): void {
  }

  getEmployee(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._empleadoService.getEmployee(id).subscribe(
          response => {
            if (response.code == 200) {
              this.employee = response.data;
            }
          }, error => {
            this._router.navigate(['**']);
          }
        )
      }, error => {
        this._router.navigate(['**']);
      }
    )
  }
}

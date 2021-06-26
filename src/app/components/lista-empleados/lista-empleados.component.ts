import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css'],
  providers: [EmpleadoService]
})
export class ListaEmpleadosComponent implements OnInit {
  public empleados: Array<Empleado>
  public url: string

  constructor(private _empleadoService: EmpleadoService) {
    this.empleados = [];
    this.url = global.urlApi;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getEmployees();
  }

  getEmployees() {
    this._empleadoService.getEmployees().subscribe(
      response => {
        if (response.code == 200) {
          this.empleados = response.data;
        }
      }, error => { }
    );
  }
}

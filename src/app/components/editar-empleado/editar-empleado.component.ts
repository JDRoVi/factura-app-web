import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
  providers: [EmpleadoService]
})
export class EditarEmpleadoComponent implements OnInit {
  public employee: Empleado;
  public status: number;

  constructor(private _empleadoService: EmpleadoService) {
    this.employee = new Empleado(1, "", "", "", "", "", 1);
    this.status = -1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {}
}

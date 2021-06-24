import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
  providers: [EmpleadoService]
})
export class AgregarEmpleadoComponent implements OnInit {
  public employe: Empleado;
  public status: number;

  constructor(private _empleadoService: EmpleadoService) {
    this.employe = new Empleado(1, "", "", "", "", 1);
    this.status = -1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let counter = timer(5000);
    this._empleadoService.register(this.employe).subscribe(
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
    )
  }
}

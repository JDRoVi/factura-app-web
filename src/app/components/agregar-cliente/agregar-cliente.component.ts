import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css'],
  providers: [ClienteService]
})
export class AgregarClienteComponent implements OnInit {
  public client: Cliente;
  public status: number;

  constructor(private _clienteService: ClienteService) {
    this.client = new Cliente(1, "", "", 1, "");
    this.status = -1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let counter = timer(5000);
    this._clienteService.register(this.client).subscribe(
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

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css'],
  providers: [ClienteService]
})
export class DetalleClienteComponent implements OnInit {
  public client: Cliente;
  public url: string;

  constructor(
    private _clienteService: ClienteService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = global.urlApi;
    this.client = new Cliente(1, "", "", 1, "");
  }

  ngOnInit(): void {
  }

  getClient(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._clienteService.getClient(id).subscribe(
          response => {
            if (response.code == 200) {
              this.client = response.data;
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
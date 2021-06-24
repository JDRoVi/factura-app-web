import { Component, OnInit } from '@angular/core';
import { global } from '../../services/configuration';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  providers: [ClienteService]
})
export class ListaClientesComponent implements OnInit {
  public clientes: Array<Cliente>;
  public url: string;

  constructor(private _clienteService: ClienteService) {
    this.clientes = [];
    this.url = global.urlApi;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getUsers();
  }

  getUsers() {
    this._clienteService.getClients().subscribe(
      response => { }, error => { }
    )
  }
}

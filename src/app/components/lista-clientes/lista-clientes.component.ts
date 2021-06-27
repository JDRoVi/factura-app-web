import { Component, OnInit } from '@angular/core';
import { global } from '../../services/configuration';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { HttpClient } from '@angular/common/http';

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
    this.url = global.urlApi;
    this.clientes = [];
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getUsers();
  }

  getUsers() {
    this._clienteService.getClients().subscribe(
      response => {
        if(response.code==200){
          this.clientes=response.data;
        }
      }, error => { }
    );
  }
}

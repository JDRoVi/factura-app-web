import { Component, OnInit, Provider } from '@angular/core';
import { global } from '../../services/configuration';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css'],
  providers: [ProveedorService]
})
export class ListaProveedoresComponent implements OnInit {
  public proveedor: Array<Proveedor>;
  public url: string;

  constructor(private _proveedoresService: ProveedorService) {
    this.proveedor = [];
    this.url = global.urlApi;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getProviders();
  }

  getProviders() {
    this._proveedoresService.getProviders().subscribe(
      response => {
        if (response.code == 200) {
          this.proveedor = response.data;
        }
      }, error => { }
    );
  }
}

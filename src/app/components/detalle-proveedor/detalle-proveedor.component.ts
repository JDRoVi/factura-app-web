import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css'],
  providers: [ProveedorService]
})
export class DetalleProveedorComponent implements OnInit {
  public prov: Proveedor;
  public url: string;

  constructor(
    private _proveedorService: ProveedorService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.prov = new Proveedor(1, 1, "", 1, "", "");
    this.url = global.urlApi;
  }

  ngOnInit(): void {
  }

  getProvidor(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._proveedorService.getProvider(id).subscribe(
          response => {
            if (response.code == 200) {
              this.prov = response.data;
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

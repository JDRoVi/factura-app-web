import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { global } from '../../services/configuration';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  providers: [ProductoService]
})
export class DetalleProductoComponent implements OnInit {
  public product: Producto;
  public url: string;

  constructor(
    private _productService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.product = new Producto(1, 1, 1, "", 1, null, 1)
    this.url = global.urlApi;
  }

  ngOnInit(): void {
  }

  getClient(): void {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._productService.getProduct(id).subscribe(
          response => {
            if (response.code == 200) {
              this.product = response.data;
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

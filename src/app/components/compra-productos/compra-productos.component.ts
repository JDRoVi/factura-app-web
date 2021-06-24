import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-compra-productos',
  templateUrl: './compra-productos.component.html',
  styleUrls: ['./compra-productos.component.css']
})
export class CompraProductosComponent implements OnInit {
  public product: Producto;
  public status: number;

  constructor(private _productService: ProductoService) {
    this.product = new Producto(1, 1, 1, "", 1, null, 1)
    this.status = -1
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let counter = timer(5000);
    this._productService.register(this.product).subscribe(
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
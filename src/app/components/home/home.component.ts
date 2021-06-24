import { Component, OnInit } from '@angular/core';
import { global } from '../../services/configuration';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductoService]
})
export class HomeComponent implements OnInit {
  public productos: Array<Producto>
  public url: string;

  constructor(private _productService: ProductoService) {
    this.productos = [];
    this.url = global.urlApi;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      response => { }, error => { }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { global } from '../../services/configuration';
import { VentaService } from '../../services/venta.service';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VentaService]
})
export class HomeComponent implements OnInit {
  public ventas: Array<Venta>
  public url: string;
  constructor(private _ventaService: VentaService) {
    this.ventas = [];
    this.url = global.urlApi;
  }

  ngOnInit(): void {
    this.loadElements();
  }

  loadElements() {
    this.getSells();
  }

  getSells() {
    this._ventaService.getSells().subscribe(
      response => {
        if (response.code == 200) { } else { }
      }, error => { }
    );
  }
}

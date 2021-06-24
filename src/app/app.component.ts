import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { VentaService } from './services/venta.service';
import { CompraService } from './services/compra.service';
import { DetalleCompraService } from './services/detalleventa.service';
import { DetalleVentaService } from './services/detallecompra.service';
import { global } from './services/configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UsuarioService,
    VentaService,
    CompraService,
    DetalleCompraService,
    DetalleVentaService
  ]
})
export class AppComponent {
  public identity: any;
  public token: any;
  public venta: any;
  public compra: any;
  public detalleventa: any;
  public detallecompra: any;
  public times: number;

  constructor(
    public _usuarioService: UsuarioService,
    public _ventaService: VentaService,
    public _compraService: CompraService,
    public _detalleCompraService: DetalleCompraService,
    public _detalleVentaService: DetalleVentaService
  ) {
    this.loadStorage();
    this.loadVentas();
    //this.loadCompra();
    //this.loadDetalleCompraService();
    //this.loadDetalleVentaService();
    this.times = 0;
  }

  public loadStorage() {
    this.identity = this._usuarioService.getIdentity();
    this.token = this._usuarioService.getToken();
  }

  loadVentas() {
    this._ventaService.getSells().subscribe(
      response => {
        if (response.code == 200) {
          this.venta = response.data;
        }
      }, error => {
        this.venta = null;
      }
    );
  }
  /*loadCompra() {
    this._compraService.register().subscribe(
      response => {
        if (response.code == 200) {
          this.compra = response.data;
        }
      }, error => {
        this.compra = null;
      }
    );
  }
  loadDetalleCompraService() {
    this._detalleCompraService.register().subscribe(
      response => {
        if (response.code == 200) {
          this.detallecompra = response.data;
        }
      }, error => {
        this.detallecompra = null;
      }
    );
  }
  loadDetalleVentaService() {
    this._detalleVentaService.register().subscribe(
      response => {
        if (response.code == 200) {
          this.venta = response.data;
        }
      }, error => {
        this.venta = null;
      }
    );
  }*/
  ngOnInit(): void {
    this.times = 0;
  }
  ngDoCheck(): void {
    this.times++;
    if (this.times > 4) {
      this.loadStorage();
      this.loadVentas();
      //this.loadCompra();
      //this.loadDetalleCompraService();
      //this.loadDetalleVentaService();
    }
  }
}

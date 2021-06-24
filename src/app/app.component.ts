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
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public identity: any;
  public token: any;
  public venta: any;
  public compra: any;
  public detalleventa: any;
  public detallecompra: any;

  constructor(
    public _usuarioService: UsuarioService,
    public _ventaService: VentaService,
    public _compraService: CompraService,
    public _detalleCompraService: DetalleCompraService,
    public _detalleVentaService: DetalleVentaService
  ) {
    this.loadStorage();
  }

  public loadStorage() {
    this.identity = this._usuarioService.getIdentity();
    this.token = this._usuarioService.getToken();
  }

  loadVentas() {
    this._ventaService.getSells().subscribe(
      response=>{
        if(response.code==200){
          this.venta=response.data;
        }
      },error=>{
        this.venta = null;
      }
    );
  }
  loadCompra() { }
  loadDetalleCompraService() { }
  loadDetalleVentaService() { }
}

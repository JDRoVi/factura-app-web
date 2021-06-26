import { Component, Injectable } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { VentaService } from './services/venta.service';
import { CompraService } from './services/compra.service';
import { DetalleCompraService } from './services/detalleventa.service';
import { DetalleVentaService } from './services/detallecompra.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
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
  public historial: any;
  public facturas:any;
  public times: number;

  constructor(
    public _router: Router,
    public _route: ActivatedRoute,
    public _usuarioService: UsuarioService,
    public _ventaService: VentaService,
    public _compraService: CompraService,
    public _detalleCompraService: DetalleCompraService,
    public _detalleVentaService: DetalleVentaService
  ) {
    this.loadStorage();
    this.loadVentas();
    this.times = 0;
  }

  loadStorage() {
    this.identity = this._usuarioService.getIdentity();
    console.log(this.identity);
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

  logout(){
    this._route.params.subscribe(
      params => {
        let logout = + params['sure'];

        if(logout == 1){
            localStorage.removeItem('identity');
            localStorage.removeItem('token');

            this.identity = null;
            this.token = null;
            this._router.navigate(['login']);
        }
    });
}

  ngOnInit(): void {
    this.logout();
    this.times = 0;
  }
  
  ngDoCheck(): void {
    this.times++;
    this.loadStorage();
    if (this.times > 4) {
      this.loadVentas();
      this.times = 0;
    }
  }
}

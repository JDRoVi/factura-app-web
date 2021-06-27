import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Producto } from '../../models/producto';
import { Compra } from 'src/app/models/compra';
import { ProductoService } from '../../services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { CompraService } from 'src/app/services/compra.service';
import { DetalleCompra } from 'src/app/models/detallecompra';
import { DetalleCompraService } from 'src/app/services/detallecompra.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-compra-productos',
  templateUrl: './compra-productos.component.html',
  styleUrls: ['./compra-productos.component.css'],
  providers: [ProductoService, ProveedorService, CompraService, DetalleCompraService,
    EmpleadoService]
})
export class CompraProductosComponent implements OnInit {
  public product: Producto;
  public status: number;
  public idDetalle: number;
  public provider: any;
  public employes: any;
  public detail: DetalleCompra;
  public details: any;
  public buy: Compra;


  constructor(public _productService: ProductoService,
    public _providerService: ProveedorService,
    public _detailService: DetalleCompraService,
    public _buyService: CompraService,
    public _employeService: EmpleadoService) {
    this.product = new Producto(1, 1, 1, "", 1, null, 1);
    this.detail = new DetalleCompra(1, 1, 1, 1, 1, 1);
    this.buy = new Compra(1, 1, 1, 1, "", 1);
    this.status = -1;
    this.idDetalle = 0;
    this.loadProviders();
    this.loadDetail();
    this.loadEmployes();

  }

  public loadEmployes() {
    this._employeService.getEmployees().subscribe(
      response => {
        if (response.code == 200) {
          this.employes = response.data;
          console.log(this.employes);
        }
      },
      error => {
        this.employes = null;
        console.log(error);
      }
    );
  }

  public loadDetail() {
    this._detailService.getDetails().subscribe(
      response => {
        console.log(response);
        if (response.code == 200) {
          this.details = response.data;
        }
      },
      error => {
        this.details = null;
        console.log(error);
      }
    );
  }

  public loadProviders() {
    this._providerService.getProviders().subscribe(
      response => {
        console.log(response);
        if (response.code == 200) {
          this.provider = response.data;
        }
      },
      error => {
        this.provider = null;
        console.log(error);
      }
    );

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

  
  onBuyit(form:any){
    let counter = timer(5000);
    this._buyService.register(this.buy).subscribe(
      response => {console.log(response);
        if (response.code == 200) {
          this.status = 0;
          counter.subscribe(n => { this.status = -1 });
          form.reset();
        } else {
          this.status = 1;
        }
      }, error => {
        console.log(error);
        if (error.status == 406) {
          this.status = 2;
          counter.subscribe(n => { this.status = -1 });
        }
      }
    );
  }

  onDetailit(form:any){
    let counter = timer(5000);
    this._detailService.register(this.detail).subscribe(
      response => {console.log(response);
        if (response.code == 200) {
          this.status = 0;
          counter.subscribe(n => { this.status = -1 });
          form.reset();
        } else {
          this.status = 1;
        }
      }, error => {
        console.log(error);
        if (error.status == 406) {
          this.status = 2;
          counter.subscribe(n => { this.status = -1 });
        }
      }
    );
  }
}
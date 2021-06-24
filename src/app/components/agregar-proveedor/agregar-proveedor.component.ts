import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-agregar-proovedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css'],
  providers: [ProveedorService]
})
export class AgregarProveedorComponent implements OnInit {
  public prov: Proveedor;
  public status: number;

  constructor(private proveedorService: ProveedorService) {
    this.prov = new Proveedor(1, 1, "", 1, "", "");
    this.status = -1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let counter = timer(5000);
    this.proveedorService.register(this.prov).subscribe(
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

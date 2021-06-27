import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {}
}

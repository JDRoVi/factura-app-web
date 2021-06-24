import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FroalaEditorDirective, FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { CompraProductosComponent } from './components/compra-productos/compra-productos.component';
import { VentaComponent } from './components/venta/venta.component';
import { ErrorComponent } from './components/error/error.component';
import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EditarProveedorComponent } from './components/editar-proveedor/editar-proveedor.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { DetalleProveedorComponent } from './components/detalle-proveedor/detalle-proveedor.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { FacturaVentaComponent } from './components/factura-venta/factura-venta.component';
import { FacturaCompraComponent } from './components/factura-compra/factura-compra.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AgregarUsuarioComponent,
    AgregarEmpleadoComponent,
    AgregarClienteComponent,
    AgregarProveedorComponent,
    CompraProductosComponent,
    VentaComponent,
    ErrorComponent,
    HistorialComprasComponent,
    ListaEmpleadosComponent,
    ListaClientesComponent,
    ListaProveedoresComponent,
    ListaUsuariosComponent,
    EditarUsuarioComponent,
    EditarEmpleadoComponent,
    EditarClienteComponent,
    EditarProveedorComponent,
    DetalleUsuarioComponent,
    DetalleClienteComponent,
    DetalleEmpleadoComponent,
    DetalleProveedorComponent,
    DetalleProductoComponent,
    FacturaVentaComponent,
    FacturaCompraComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

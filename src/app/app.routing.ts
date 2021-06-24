import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { AgregarProveedorComponent } from './components/agregar-proveedor/agregar-proveedor.component';
import { CompraProductosComponent } from './components/compra-productos/compra-productos.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { VentaComponent } from './components/venta/venta.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { HistorialComprasComponent } from './components/historial-compras/historial-compras.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { EditarProveedorComponent } from './components/editar-proveedor/editar-proveedor.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { DetalleProveedorComponent } from './components/detalle-proveedor/detalle-proveedor.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { FacturaCompraComponent } from './components/factura-compra/factura-compra.component';
import { FacturaVentaComponent } from './components/factura-venta/factura-venta.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio/:id', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registrar-usuario', component: AgregarUsuarioComponent },
    { path: 'registrar-empleado', component: AgregarEmpleadoComponent },
    { path: 'registrar-proveedor', component: AgregarProveedorComponent },
    { path: 'compra-productos', component: CompraProductosComponent },
    { path: 'registrar-cliente', component: AgregarClienteComponent },
    { path: 'checkout', component: VentaComponent },
    { path: 'lista-usuarios', component: ListaUsuariosComponent },
    { path: 'lista-empleados', component: ListaEmpleadosComponent },
    { path: 'lista-proveedores', component: ListaProveedoresComponent },
    { path: 'lista-clientes', component: ListaClientesComponent },
    { path: 'historial-compras', component: HistorialComprasComponent },
    { path: 'editar-usuario', component: EditarUsuarioComponent },
    { path: 'editar-empleado', component: EditarEmpleadoComponent },
    { path: 'editar-proveedor', component: EditarProveedorComponent },
    { path: 'editar-cliente', component: EditarClienteComponent },
    { path: 'detalle-cliente/:id', component: DetalleClienteComponent },
    { path: 'detalle-empleado/:id', component: DetalleEmpleadoComponent },
    { path: 'detalle-producto/:id', component: DetalleProductoComponent },
    { path: 'detalle-proveedor/:id', component: DetalleProveedorComponent },
    { path: 'detalle-usuario/:id', component: DetalleUsuarioComponent },
    { path: 'factura-compra/:id', component: FacturaCompraComponent },
    { path: 'factura-venta/:id', component: FacturaVentaComponent },
    { path: '**', component: ErrorComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth/auth.guard';
import { DocuComponent } from './docu/docu.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './orders/order/order.component';
import { LoginComponent } from './user/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { SupplierOrderComponent } from './supplier-orders/supplier-order/supplier-order.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent,  canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'suppliers', component: SupplierOrdersComponent, canActivate: [AuthGuard] },
  { path: 'docu', component: DocuComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },

  {
    path: 'user', component: UserComponent,
    children: [{ path: 'registration', component: RegistrationComponent }],
  },

  {
    path: 'order',
    children: [
      { path: '', component: OrderComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: OrdersComponent },

    ],
  },

  {
    path: 'supplier-order',
    children: [
      { path: '', component: SupplierOrderComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: SupplierOrderComponent },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

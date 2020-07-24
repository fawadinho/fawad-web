import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderComponent } from './orders/order/order.component';
import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'inventory', component: InventoryComponent },

  { path: '', redirectTo:'/user/registration', pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [{ path: 'registration', component: RegistrationComponent }],
  },
  {
    path: 'order',
    children: [
      { path: '', component: OrderComponent },
      { path: 'edit/:id', component: OrdersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

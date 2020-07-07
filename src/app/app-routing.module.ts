import { OrderComponent } from './orders/order/order.component';
import { Order } from './shared/order.model';
import { AuthGuard } from './_helpers/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'order', children:[
     { path:'', component: OrderComponent},
     { path: 'edit/:id', component: OrdersComponent},
  ]},
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'about', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

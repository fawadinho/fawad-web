import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './shared/user.service';
import { OrderService } from './shared/order.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToastrModule } from 'ngx-toastr';

import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './user/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderproductsComponent } from './orders/order-products/order-products.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import  {MatCurrencyFormatModule} from 'mat-currency-format';
import { SupplierOrderComponent } from './supplier-orders/supplier-order/supplier-order.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { SupplierOrderProductsComponent } from './supplier-orders/supplier-order-products/supplier-order-products.component';
import { DocuComponent } from './docu/docu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    OrdersComponent,
    OrderComponent,
    OrderproductsComponent,
    InventoryComponent,
    UserComponent,
    RegistrationComponent,
    SupplierOrderComponent,
    SupplierOrdersComponent,
    SupplierOrderProductsComponent,
    DocuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCurrencyFormatModule,
    ToastrModule.forRoot(),
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],

  entryComponents: [OrderproductsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

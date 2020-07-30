import { OrderProduct } from './order-product.model';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  getProductList() {
    throw new Error("Err");
  }
  getproductList() {
    throw new Error("Err");
  }
  formData: Order;
  orderproducts: OrderProduct[];

  constructor(private http: HttpClient) { }

  getOrderList() {
    return this.http.get(environment.apiURL + '/Order').toPromise();

  }

  saveOrder() {
    var body = {
      ...this.formData,
      Orderproducts: this.orderproducts,
    };
    return this.http.post(environment.apiURL + '/Order', body);
  }
}

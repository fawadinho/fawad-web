import { OrderItem } from './order-item.model';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  getItemList() {
    throw new Error("Method not implemented.");
  }
  formData: Order;
  orderItems: OrderItem[];

  constructor(private http: HttpClient) {}

  saveOrder() {
    var body = {
      ...this.formData,
      OrderItems : this.orderItems,
    };
    return this.http.post(environment.apiURL + '/Order', body);
  }

  getOrderList(){
    return this.http.get(environment.apiURL+'/Order').toPromise();

  }



}

import { OrderService } from './../shared/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {

  orderList: Object;

  constructor(private service: OrderService) { }

  ngOnInit() {
    this.service.getOrderList().then(res => this.orderList = res);

  }

}





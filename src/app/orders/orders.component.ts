import { Component, OnInit } from '@angular/core';
import { RequestorOrderService } from '../shared/requestororder.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit {


  requestororderList: Object;

  constructor(private service: RequestorOrderService) { }

  ngOnInit() {
    this.service.getRequestorOrderList().then(res => this.requestororderList = res);

  }z

}

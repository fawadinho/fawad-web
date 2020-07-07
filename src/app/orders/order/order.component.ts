import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(public service: OrderService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.service.formData = {
      OrderID: null,
      OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      CustomerID: 0,
      PaymentMethod: '',
      Total: 0,
    };
  }
}

import { CustomerService } from './../../shared/customer.service';
import { OrderItemsComponent } from './../order-items/order-items.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/shared/customer.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  customerList: Customer[];
  isValid: boolean = true;

  constructor(
    public service: OrderService,
    private dialog: MatDialog,
    private CustomerService: CustomerService
  ) {}


  ngOnInit() {
    this.resetForm();

    this.CustomerService.getCustomerList().then(
      (res) => (this.customerList = res as Customer[])
    );
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
    this.service.orderItems = [];
  }

  AddorEditOrderItem(orderItemIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog
      .open(OrderItemsComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.updateTotal();
      });
  }

  onDeleteOrderItem(orderItemID: number, i: number) {
    this.service.orderItems.splice(i, 1);
    this.updateTotal();
  }

  updateTotal() {
    this.service.formData.Total = this.service.orderItems.reduce(
      (prev, curr) => {
        return prev + curr.Total;
      },
      0
    );

    this.service.formData.Total = parseFloat(
      this.service.formData.Total.toFixed(2)
    );
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.CustomerID == 0) this.isValid = false;
    else if (this.service.orderItems.length == 0) this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrder().subscribe(res =>{
        this.resetForm();
      })
    }
  }



}

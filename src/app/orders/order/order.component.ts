import { OrderItemsComponent } from './../order-items/order-items.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItem } from './../../shared/order-item.model';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(public service: OrderService,
    private dialog:MatDialog
    ) {}

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
    this.service.orderItems=[];
  }

    AddorEditOrderItem( orderItemIndex,OrderID ) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width="50%";
      dialogConfig.data = { orderItemIndex,OrderID };
      this.dialog.open(OrderItemsComponent, dialogConfig );
    }

    onDeleteOrderItem(orderItemID: number, i:number){
      this.service.orderItems.splice(i,1);
    }
  }



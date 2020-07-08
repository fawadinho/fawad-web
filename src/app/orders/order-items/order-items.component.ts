import { OrderService } from './../../shared/order.service';
import { ItemService } from './../../shared/item.service';
import { OrderItem } from './../../shared/order-item.model';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Item } from 'src/app/shared/item.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  isValid:boolean = true;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private ItemService: ItemService,
    private OrderService:OrderService
  ) {}

  ngOnInit() {
    this.ItemService.getItemList().then(res => this.itemList = res as Item[]);

    if(this.data.orderItemIndex==null)

    this.formData = {
      OrderItemID: null,
      OrderID: this.data.OrderID,
      ItemID: 0,
      ItemName: '',
      Price: 0,
      Quantity: 0,
      Total: 0,
    }
    else
      this.formData = Object.assign({}, this.OrderService.orderItems [this.data.orderItemIndex]);
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
      this.formData.ItemName = '';
    } else {
      this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
      this.formData.ItemName = this.itemList[ctrl.selectedIndex - 1].Name;
    }
    this.updateTotal();
  }

  updateTotal(){
    this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));

  }
  onSubmit(form:NgForm){
    if(this.validateForm(form.value))
    this.OrderService.orderItems.push(form.value);

    else
    this.OrderService.orderItems[this.data.orderItemIndex] = form.value;
    this.dialogRef.close();

  }

  validateForm(formData:OrderItem) {
    this.isValid =true;
    if(formData.ItemID==0)
    this.isValid=false;
    else if(formData.Quantity==0)
    this.isValid = false;
    return this.isValid;
  }
}

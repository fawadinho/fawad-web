import { ItemService } from './../../shared/item.service';
import { OrderItem } from './../../shared/order-item.model';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Item } from 'src/app/shared/item.model';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss'],
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private ItemService: ItemService
  ) {}

  ngOnInit() {
    this.ItemService.getItemList().then(
      (res) => (this.itemList = res as Item[])
    );

    this.formData = {
      OrderItemID: null,
      OrderID: this.data.OrderID,
      ItemID: 0,
      ItemName: '',
      Price: 0,
      Quantity: 0,
      Total: 0,
    };
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
    } else {
      this.formData.Price = this.itemList[ctrl.selectedIndex - 1].Price;
    }
  }
}

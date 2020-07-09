import { Component, OnInit } from '@angular/core';
import { ItemService } from './../shared/item.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {


  itemList: Object;
  ItemService: any;

  constructor(private service:ItemService) { }

  ngOnInit() {
    this.ItemService.getItemList().then(res=> this.itemList = res);

  }


}

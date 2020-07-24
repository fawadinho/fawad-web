import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {


  itemList: Object;

  constructor(private service:ProductService) { }

  ngOnInit() {
    this.service.getProductList().then(res=> this.itemList = res);

  }

}





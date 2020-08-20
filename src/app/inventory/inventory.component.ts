import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {


  productList: Object;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProductList().then(res => this.productList = res);

  }
  

}








import { ProductService } from '../../shared/product.service';
import { OrderProduct } from '../../shared/order-product.model';
import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { product } from 'src/app/shared/product.model';
import { NgForm } from '@angular/forms';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { RequestorOrderService } from 'src/app/shared/requestororder.service';
import { RequestorOrderProduct } from 'src/app/shared/requestororder-product.model';


@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
})


export class OrderproductsComponent implements OnInit {
  formData: RequestorOrderProduct;
  productList: product[] = [];
  isValid: boolean = true;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderproductsComponent>,
    private productService: ProductService,
    private requestorOrderService: RequestorOrderService
  ) { }

  ngOnInit() {
    this.productService.getProductList().then(res => this.productList = res as product[]);

    if (this.data.orderproductIndex == null)

      this.formData = {
        RequestorOrderProductID: null,
        RequestorOrderID: this.data.OrderID,
        ProductID: 0,
        Name: '',
        Price: 0,
        Quantity: 0,
        Size: '',
        Total: 0,
      }
    else
      this.formData = Object.assign({}, this.requestorOrderService.RequestorOrderProducts[this.data.orderproductIndex]);
  }

  updatePrice(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.Price = 0;
      this.formData.Name = '';
    } else {
      this.formData.Price = this.productList[ctrl.selectedIndex - 1].Price;
      this.formData.Name = this.productList[ctrl.selectedIndex - 1].Name;
    }
    this.updateTotal();
  }

  updateTotal() {
    this.formData.Total = parseFloat((this.formData.Quantity * this.formData.Price).toFixed(2));

  }
  onSubmit(form: NgForm) {
    if (this.validateForm(form.value))
      this.requestorOrderService.RequestorOrderProducts.push(form.value);

    else
      this.requestorOrderService.RequestorOrderProducts[this.data.orderproductIndex] = form.value;
    this.dialogRef.close();

  }

  validateForm(formData: OrderProduct) {
    this.isValid = true;
    if (formData.ProductID == 0)
      this.isValid = false;
    else if (formData.Quantity == 0)
      this.isValid = false;
    return this.isValid;
  }
}

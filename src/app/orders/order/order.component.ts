import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RequestorService } from '../../shared/requestor.service';
import { OrderproductsComponent } from './../order-products/order-products.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { requestor } from 'src/app/shared/requestor.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  requestorList: requestor[];
  isValid: boolean = true;

  constructor(
    public service: OrderService,
    private dialog: MatDialog,
    private RequestorService: RequestorService,
    private toastr: ToastrService,
    private router: Router

  ) {}


  ngOnInit() {
    this.resetForm();

    this.RequestorService.getRequestorList().then(
      (res) => (this.requestorList = res as requestor[])
    );
  }


  resetForm(form?: NgForm) {
    if ((form = null)) form.resetForm();
    this.service.formData = {
      OrderID: null,
      OrderNo: Math.floor(10000 + Math.random() * 50000).toString(),
      RequestorID: 0,
      PaymentMethod: '',
      Total: 0,
      DeletedOrderProductID: '',
    };
    this.service.orderproducts = [];
  }

  AddorEditOrderProduct(orderProductIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '65%';
    dialogConfig.data = { orderProductIndex, OrderID };
    this.dialog
      .open(OrderproductsComponent, dialogConfig)
      .afterClosed()
      .subscribe((res) => {
        this.updateTotal();
      });
  }

  onDeleteOrderProduct(orderProductID: number, i: number) {
    if(orderProductID !=null)
    this.service.formData.DeletedOrderProductID += orderProductID +","
    this.service.orderproducts.splice(i, 1);
    this.updateTotal();
  }

  updateTotal() {
    this.service.formData.Total = this.service.orderproducts.reduce(
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
    if (this.service.formData.RequestorID == 0) this.isValid = false;
    else if (this.service.orderproducts.length == 0) this.isValid = false;
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrder().subscribe(res =>{
        this.resetForm();
        this.toastr.success('Sent Success!', 'MIS Inc.')
        this.router.navigate(['/orders']);

      })
    }
  }



}

import { RequestorOrder } from './requestororder.model';
import { RequestorOrderProduct } from './requestororder-product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RequestorOrderService {
  getProductList() {
    throw new Error("Err");
  }
  getproductList() {
    throw new Error("Err");
  }
  formData: RequestorOrder;
  RequestorOrderProducts: RequestorOrderProduct[];

  constructor(private http: HttpClient) { }

  getRequestorOrderList() {
    return this.http.get(environment.apiURL + '/RequestorOrders/GetRequestorOrders').toPromise();

  }

  saveOrder() {
    var body = {
      ...this.formData,
      requestorOrderProducts: this.RequestorOrderProducts,
    };
    return this.http.post(environment.apiURL + '/RequestorOrders/PostRequestorOrder', body);
  }
}

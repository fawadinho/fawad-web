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
  requestororderproducts: RequestorOrderProduct[] = [];

  constructor(private http: HttpClient) { }

  getRequestorOrderList() {
    return this.http.get(environment.apiURL + '/RequestorOrders').toPromise();

  }

  saveOrder() {
    var body = {
      ...this.formData,
      RequestorOrderproducts: this.requestororderproducts,
    };
    return this.http.post(environment.apiURL + '/RequestorOrders', body);
  }
}

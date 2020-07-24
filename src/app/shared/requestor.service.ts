import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RequestorService {

  constructor(private http: HttpClient) { }

  getRequestorList(){
    return this.http.get(environment.apiURL+'/requestor').toPromise();

  }
}

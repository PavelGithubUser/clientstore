import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderModel} from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private userUrl = 'http://localhost:8080/order/';

  constructor(private http: HttpClient) {}

  public getAllOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.userUrl + 'all');
  }

  public saveOrder(orderModel: OrderModel): Observable<any> {
    return this.http.post<any>(this.userUrl + 'save', orderModel, {
      observe: 'response'
    });
  }

  public deleteOrderById(id: number): Observable<any> {
    return this.http.delete<any>(this.userUrl + 'delete/' + id, {
      observe: 'response'
    });
  }

  public getOrderById(id: number): Observable<OrderModel> {
    return this.http.get<OrderModel>(this.userUrl + 'get/' + id);
  }
}

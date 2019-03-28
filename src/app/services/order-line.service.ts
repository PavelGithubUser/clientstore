import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderLineModel} from '../model/order.line.model';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {
  private userUrl = 'http://localhost:8080/orderline/';

  constructor(private http: HttpClient) {}

  public getAllOrderLines(): Observable<OrderLineModel[]> {
    return this.http.get<OrderLineModel[]>(this.userUrl + 'all');
  }

  public saveOrderLine(orderModel: OrderLineModel): Observable<OrderLineModel> {
    return this.http.post<OrderLineModel>(this.userUrl + 'save', orderModel);
  }

  public updateOrderLine(orderModel: OrderLineModel): Observable<any> {
    return this.http.post<any>(this.userUrl + 'save', orderModel,{
        observe: 'response'
      });
  }

  public deleteOrderLineById(id: number): Observable<any> {
    return this.http.delete<any>(this.userUrl + 'delete/' + id, {
      observe: 'response'
    });
  }

  public getOrderLineById(id: number): Observable<OrderLineModel> {
    return this.http.get<OrderLineModel>(this.userUrl + 'get/' + id);
  }

  public getOrderLineByOrderId(id: number): Observable<OrderLineModel[]> {
    return this.http.get<OrderLineModel[]>(this.userUrl + 'allbyorder/' + id);
  }

}

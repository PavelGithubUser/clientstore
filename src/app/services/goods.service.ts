import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GoodModel} from '../model/good.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private userUrl = 'http://localhost:8080/good/';

  constructor(private http: HttpClient) {}

  public getAllGoods(): Observable<GoodModel[]> {
    return this.http.get<GoodModel[]>(this.userUrl + 'all');
  }

  public saveGood(goodModel: GoodModel): Observable<any> {
    return this.http.post<any>(this.userUrl + 'save', goodModel, {
      observe: 'response'
    });
  }

  public deleteGoodById(id: number): Observable<any> {
    return this.http.delete<any>(this.userUrl + 'delete/' + id, {
      observe: 'response'
    });
  }

  public getGoodById(id: number): Observable<GoodModel> {
    return this.http.get<GoodModel>(this.userUrl + 'get/' + id);
  }

  public getAllNotAddToOrder(id: number): Observable<GoodModel[]> {
    return this.http.get<GoodModel[]>(this.userUrl + 'allnotaddtoorder/' + id);
  }

}

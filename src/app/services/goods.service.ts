import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {GoodModel} from '../model/good.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  private userUrl = 'http://localhost:8080/good/';

  constructor(private http: HttpClient) {}

  public getAllGoods(): Observable<GoodModel[]> {
    return this.http.get<GoodModel[]>(this.userUrl + 'all');
  }

  public saveGood(goodModel: GoodModel): Observable<GoodModel> {
    return this.http.post<GoodModel>(this.userUrl + 'save', goodModel);
  }

  public deleteGoodById(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.userUrl + 'delete/' + id);
  }

  public getGoodById(id: number): Observable<GoodModel> {
    return this.http.get<GoodModel>(this.userUrl + 'get/' + id);
  }

}

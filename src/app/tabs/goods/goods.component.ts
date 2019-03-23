import {Component, OnInit, ViewChild} from '@angular/core';
import {GoodsService} from '../../services/goods.service';
import {GoodModel} from '../../model/good.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(private goodsService: GoodsService) {}

  goodModels: GoodModel[];
  responseStatus: number;

  ngOnInit() {
    this.initGoodModels();
  }

  initGoodModels() {
    this.goodsService.getAllGoods().subscribe(goods => {
      this.goodModels = goods;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
      }
    });
  }

  deleteGood(idGood: number) {
    const indexGood = this.goodModels.findIndex(goodModel => goodModel.id === idGood);
    this.goodsService.deleteGoodById(idGood).subscribe(response => {
        if (response instanceof HttpResponse) {
          this.responseStatus = response.status;
          this.goodModels.splice(this.goodModels.findIndex(goodModels => goodModels.id === indexGood), 1);
        }
      }, error => {
        if (error instanceof HttpErrorResponse) {
          this.responseStatus = error.status;
        }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {GoodsService} from '../../services/goods.service';
import {GoodModel} from '../../model/good.model';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(private goodsService: GoodsService) {}

  goodModels: GoodModel[];

  ngOnInit() {
    this.initGoodModels();
  }

  initGoodModels() {
    this.goodsService.getAllGoods().subscribe(goods => {
      this.goodModels = goods;
    });
  }

}

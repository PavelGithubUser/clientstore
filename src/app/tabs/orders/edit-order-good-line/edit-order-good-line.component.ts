import {Component, Input, OnInit} from '@angular/core';
import {OrderLineModel} from '../../../model/order.line.model';
import {GoodModel} from '../../../model/good.model';
import {GoodsService} from '../../../services/goods.service';

@Component({
  selector: 'app-edit-order-good-line',
  templateUrl: './edit-order-good-line.component.html',
  styleUrls: ['./edit-order-good-line.component.css']
})
export class EditOrderGoodLineComponent implements OnInit {

  @Input()
  orderLineModels: OrderLineModel[];
  @Input()
  orderId: number;

  notAddGoodModels: GoodModel[];

  display = false;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
  }

  show() {
    this.initNotAddGoodModels();
    this.display = true;
  }


  initNotAddGoodModels() {
    this.goodsService.getAllNotAddToOrder(this.orderId).subscribe(googModels => {
      this.notAddGoodModels = googModels;
    });
  }

  deleteGoodFromOrder(id: number) {
  }

  addGoodToOrder(goodModel: GoodModel) {
  }

}

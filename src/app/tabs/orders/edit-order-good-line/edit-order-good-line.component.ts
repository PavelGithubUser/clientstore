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
  responseStatus: number;

  constructor(private goodsService: GoodsService, private orderLineService: OrderLineService) {
  }

  ngOnInit() {
  }

  show() {
    this.initNotAddGoodModels();
  }


  initNotAddGoodModels() {
    this.goodsService.getAllNotAddToOrder(this.orderId).subscribe(goodModelsNotAddToOrder => {
      this.notAddGoodModels = goodModelsNotAddToOrder;
      if (goodModelsNotAddToOrder.length === 0 && this.orderLineModels.length === 0) {
        this.goodsService.getAllGoods().subscribe(goodModels => {
          this.notAddGoodModels = goodModels;
        });
      }
      this.display = true;
    });

  }

  deleteGoodFromOrder(id: number) {
  }

  addGoodToOrder(goodModel: GoodModel) {
  }

}

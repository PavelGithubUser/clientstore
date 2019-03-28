import {Component, Input, OnInit} from '@angular/core';
import {OrderLineModel} from '../../../model/order.line.model';
import {GoodModel} from '../../../model/good.model';
import {GoodsService} from '../../../services/goods.service';
import {OrderLineService} from '../../../services/order-line.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

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
  messageError: string;

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
        }, error => {
          if (error instanceof HttpErrorResponse) {
            this.responseStatus = error.status;
            this.messageError = 'Getting error did not goods to order.';
          }
        });
      }
      this.display = true;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
        this.messageError = 'Getting error did not goods to order.';
      }
    });

  }

  deleteGoodFromOrder(orderLineModelFromOrder: OrderLineModel) {
    this.orderLineService.deleteOrderLineById(orderLineModelFromOrder.id).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.orderLineModels.splice(this.orderLineModels.findIndex(
          orderLineModel => orderLineModel.id === orderLineModelFromOrder.id), 1
        );
        this.notAddGoodModels.push(orderLineModelFromOrder.goodDTO);
      }
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
        this.messageError = 'Error of deleting good from order.';
      }
    });
  }

  addGoodToOrder(goodModel: GoodModel) {
    const orderLineModel = {id: null, count: 1, orderEntityId: this.orderId, goodDTO: goodModel};
    this.orderLineService.saveOrderLine(orderLineModel).subscribe(orderLineModelFromServer => {
        this.orderLineModels.push(orderLineModelFromServer);
        this.notAddGoodModels.splice(this.notAddGoodModels.findIndex(
          goodModelNotAdd => goodModelNotAdd.id === goodModel.id), 1
        );
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
        this.messageError = 'Error of adding good to order.';
      }
    });
  }

  updateOrderLine(orderLineModel: OrderLineModel) {
    this.orderLineService.updateOrderLine(orderLineModel).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.responseStatus = response.status;
      }
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
        this.messageError = 'Error of adding good to order.';
      }
    });
  }

}

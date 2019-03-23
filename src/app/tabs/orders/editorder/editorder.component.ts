import {Component, Input, OnInit} from '@angular/core';
import {OrderModel} from '../../../model/order.model';
import {OrdersService} from '../../../services/orders.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {OrderLineModel} from '../../../model/order.line.model';
import {OrderLineService} from '../../../services/order-line.service';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  @Input()
  orderModel: OrderModel;
  orderLineModels: OrderLineModel[];

  display = false;
  client: string;
  address: string;
  responseStatus: number;

  constructor(private ordersService: OrdersService, private orderLineService: OrderLineService) {
  }

  ngOnInit() {
  }

  show() {
    this.initOrderLineModel();
    this.client = this.orderModel.client;
    this.address = this.orderModel.address;
    this.display = true;
  }

  initOrderLineModel() {
    this.orderLineService.getOrderLineByOrderId(this.orderModel.id).subscribe(orderLineModels => {
      this.orderLineModels = orderLineModels;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
      }
    });
  }

  close() {
    this.orderModel.client = this.client;
    this.orderModel.address = this.address;
    this.display = false;
  }

  changeClient(event) {
    if (event.target.value !== this.orderModel.client) {
      this.orderModel.client = event.target.value;
    }
  }

  changeAddress(event) {
    if (event.target.value !== this.orderModel.address) {
      this.orderModel.address = event.target.value;
    }
  }

  updateOrder() {
    this.ordersService.saveOrder(this.orderModel).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.responseStatus = response.status;
      }
      this.display = false;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
      }
      this.orderModel.client = this.client;
      this.orderModel.address = this.address;
    });
  }

}

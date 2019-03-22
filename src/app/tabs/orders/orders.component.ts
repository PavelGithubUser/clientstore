import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../../services/orders.service';
import {OrderModel} from '../../model/order.model';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) {}

  orderModels: OrderModel[];
  responseStatus: number;

  ngOnInit() {
    this.initOrderModels();
  }

  initOrderModels() {
    this.ordersService.getAllOrders().subscribe(orders => {
      this.orderModels = orders;
    });
  }

  deleteOrder(idOrder: number) {
    const indexOrder = this.orderModels.findIndex(orderModel => orderModel.id === idOrder);
    this.ordersService.deleteOrderById(idOrder).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.responseStatus = response.status;
        this.orderModels.splice(this.orderModels.findIndex(orderModels => orderModels.id === indexOrder), 1);
      }
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
      }
    });
  }

}

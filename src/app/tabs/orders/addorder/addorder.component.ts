import {Component, Input, OnInit} from '@angular/core';
import {OrderModel} from '../../../model/order.model';
import {OrdersService} from '../../../services/orders.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  @Input()
  orderModels: OrderModel[];
  orderModel: OrderModel;
  responseStatus: number;
  messageError: string;
  display = false;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orderModel = {id: null, client: '', date: null, address: ''};
  }

  show() {
    this.orderModel = {id: null, client: '', date: null, address: ''};
    this.display = true;
  }

  close() {
    this.display = false;
  }

  addOrder() {
    this.ordersService.saveOrder(this.orderModel).subscribe(orderModel => {
      this.orderModels.push(orderModel);
      this.display = false;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
        this.messageError = 'Saving error of order.';
      }
    });
  }

}

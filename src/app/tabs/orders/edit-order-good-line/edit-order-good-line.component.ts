import {Component, Input, OnInit} from '@angular/core';
import {OrderLineModel} from '../../../model/order.line.model';

@Component({
  selector: 'app-edit-order-good-line',
  templateUrl: './edit-order-good-line.component.html',
  styleUrls: ['./edit-order-good-line.component.css']
})
export class EditOrderGoodLineComponent implements OnInit {

  @Input()
  orderLineModels: OrderLineModel[];

  display = false;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.display = true;
  }

  deleteOrder(id: number) {
  }

}

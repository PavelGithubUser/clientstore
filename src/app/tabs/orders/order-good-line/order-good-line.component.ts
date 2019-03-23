import {Component, Input, OnInit} from '@angular/core';
import {OrderLineModel} from '../../../model/order.line.model';

@Component({
  selector: 'app-order-good-line',
  templateUrl: './order-good-line.component.html',
  styleUrls: ['./order-good-line.component.css']
})
export class OrderGoodLineComponent implements OnInit {

  @Input()
  orderLineModels: OrderLineModel[];

  constructor() { }

  ngOnInit() {
  }

}

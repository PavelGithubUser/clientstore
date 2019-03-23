import {Component, Inject, Input, OnInit} from '@angular/core';
import {GoodModel} from '../../../model/good.model';
import {GoodsService} from '../../../services/goods.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-editgoods',
  templateUrl: './editgoods.component.html',
  styleUrls: ['./editgoods.component.css']
})
export class EditgoodsComponent implements OnInit {

  @Input()
  goodModel: GoodModel;
  display = false;
  name: string;
  price: number;
  responseStatus: number;
  messageError: string;

  constructor(private goodsService: GoodsService) {
  }

  ngOnInit() {
  }

  show() {
    this.name = this.goodModel.name;
    this.price = this.goodModel.price;
    this.display = true;
  }

  close() {
    this.goodModel.name = this.name;
    this.goodModel.price = this.price;
    this.display = false;
  }

  changeName(event) {
    if (event.target.value !== this.goodModel.name) {
      this.goodModel.name = event.target.value;
    }
  }

  changePrice(event) {
    if (event.target.value !== this.goodModel.price) {
      this.goodModel.price = event.target.value;
    }
  }

  updateGood() {
    this.goodsService.saveGood(this.goodModel).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.responseStatus = response.status;
      }
      this.display = false;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
      }
      this.goodModel.name = this.name;
      this.goodModel.price = this.price;
      this.messageError = 'Updating error of good.';
    });
  }

}

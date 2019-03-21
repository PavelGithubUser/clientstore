import {Component, Input, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {GoodsService} from '../../../services/goods.service';
import {GoodModel} from '../../../model/good.model';
import {GoodsComponent} from '../goods.component';

@Component({
  selector: 'app-addgood',
  templateUrl: './addgood.component.html',
  styleUrls: ['./addgood.component.css']
})
export class AddgoodComponent implements OnInit {

  @Input()
  goodModels: GoodModel[];
  goodModel: GoodModel;
  responseStatus: number;
  display = false;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.goodModel = {id: null, name: '', price: 0};
  }

  show() {
    this.display = true;
  }

  close() {
    this.display = false;
  }

  addGood() {
    this.goodsService.saveGood(this.goodModel).subscribe(response => {
      if (response instanceof HttpResponse) {
        this.responseStatus = response.status;
      }
      this.goodModels.push(this.goodModel);
      this.display = false;
    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.responseStatus = error.status;
      }
    });
  }

}

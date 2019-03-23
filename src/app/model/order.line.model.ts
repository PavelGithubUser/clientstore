import {GoodModel} from './good.model';

export interface OrderLineModel {
  id: number;
  count: number;
  idOrderEntity: number;
  goodDTO: GoodModel;
}

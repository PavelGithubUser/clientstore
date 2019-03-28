import {GoodModel} from './good.model';

export interface OrderLineModel {
  id: number;
  count: number;
  orderEntityId: number;
  goodDTO: GoodModel;
}

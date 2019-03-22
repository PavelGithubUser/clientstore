import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import {AlertModule, TabsModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { GoodsComponent } from './tabs/goods/goods.component';
import { OrdersComponent } from './tabs/orders/orders.component';
import {ButtonModule} from 'primeng/button';
import {GoodsService} from './services/goods.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import { EditgoodsComponent } from './tabs/goods/editgoods/editgoods.component';
import {DialogModule} from 'primeng/dialog';
import {ChipsModule} from 'primeng/chips';
import {FormsModule} from '@angular/forms';
import { AddgoodComponent } from './tabs/goods/addgood/addgood.component';
import { EditorderComponent } from './tabs/orders/editorder/editorder.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    GoodsComponent,
    OrdersComponent,
    EditgoodsComponent,
    AddgoodComponent,
    EditorderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ButtonModule,
    HttpClientModule,
    ButtonModule,
    TabViewModule,
    DialogModule,
    ChipsModule,
    FormsModule
  ],
  providers: [GoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

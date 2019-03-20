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

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    GoodsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ButtonModule,
    HttpClientModule,
  ],
  providers: [GoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

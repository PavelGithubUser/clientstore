import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlertModule, TabsModule} from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

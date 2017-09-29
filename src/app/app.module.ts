import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { addressComponent } from './address/address.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { HttpModule } from "@angular/http";
import { StockComponent } from './stock/stock.component';
import { StockService} from "./shared/stock.service";
import {LoggerService} from "./shared/logger.service";
import { AllboxComponent } from './allbox/allbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    addressComponent,
    HeaderComponent,
    ContentComponent  ,
    MenuComponent,
    LoginComponent,
    HttpdataComponent,
    StockComponent,
    AllboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [StockService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

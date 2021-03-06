import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { addressComponent } from './address/address.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { HttpModule } from "@angular/http";
import { StockComponent } from './stock/stock.component';
import { StockService} from "./shared/stock.service";
import {LoggerService} from "./shared/logger.service";
import { AllboxComponent } from './allbox/allbox.component';

// import { CookieModule } from 'ngx-cookie';
import { CookieComponent } from './cookie/cookie.component';
import { MeetComponent } from './meet/meet.component';
import { NewmeetComponent } from './newmeet/newmeet.component';
import { Code404Component } from './code404/code404.component';
import { ConsultComponent } from './consult/consult.component';
import {ActiveformComponent} from "./activeform/activeform.component";
import {CommonModule} from "@angular/common";
import {FileUploadModule} from "ng2-file-upload";
import { PineComponent } from './pine/pine.component';
import { BindComponent } from './bind/bind.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { GouziComponent } from './gouzi/gouzi.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    addressComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent,
    HttpdataComponent,
    StockComponent,
    AllboxComponent,
    CookieComponent,
    MeetComponent,
    NewmeetComponent,
    Code404Component,
    ConsultComponent,
    ActiveformComponent,
    PineComponent,
    BindComponent,
    MultiplePipe,
    GouziComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    FileUploadModule
    // CookieModule.forRoot()
  ],
  providers: [StockService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

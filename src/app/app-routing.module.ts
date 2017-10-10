import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { addressComponent } from "./address/address.component";
import { HttpdataComponent } from "./httpdata/httpdata.component";
import { StockComponent }from "./stock/stock.component";
import { LoginComponent } from "./login/login.component";
import { AllboxComponent } from "./allbox/allbox.component";
import { MeetComponent } from "./meet/meet.component";
import { NewmeetComponent } from "./newmeet/newmeet.component";
import { Code404Component } from "./code404/code404.component"
import {ConsultComponent} from "./consult/consult.component";
import {ActiveformComponent} from "./activeform/activeform.component";

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent },
  {path:'allbox',component:AllboxComponent,
    children:[
      {path:'home/:id',component:HomeComponent,
        children:[
          {path:'',redirectTo:"newmeeting",pathMatch:"full"},
          {path:'newmeeting',component:NewmeetComponent},
          {path:'meeting',component:MeetComponent },
        ]
      },
      {path:'address',component:addressComponent,data:[{isPro:"adjfsadif"}] },
      {path:'httpdata',component:HttpdataComponent },
      {path:'zhuService',component:StockComponent },
      {path:'activeform',component:ActiveformComponent},
    ]
  },
  {path:'**',component:Code404Component},
  {path:'consult',component:ConsultComponent,outlet:'aux'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

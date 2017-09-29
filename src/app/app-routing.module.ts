import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { addressComponent } from "./address/address.component";
import { HttpdataComponent } from "./httpdata/httpdata.component";
import { StockComponent }from "./stock/stock.component";
import { LoginComponent } from "./login/login.component"
import { AllboxComponent } from "./allbox/allbox.component"

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'login',component:LoginComponent },
  {path:'allbox',component:AllboxComponent,
    children:[
      {path:'home',component:HomeComponent },
      {path:'address',component:addressComponent },
      {path:'httpdata',component:HttpdataComponent },
      {path:'zhuService',component:StockComponent },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

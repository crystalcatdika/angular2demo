import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 private homeId:string;
  constructor(private routeInfo:ActivatedRoute) {

  }

  ngOnInit() {
    this.routeInfo.params.subscribe(
      (param:Params)=> this.homeId=param["id"]
    )
    this.homeId=this.routeInfo.snapshot.params["id"]
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./login/login.component";

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName:string;
  // height:string;
  constructor(private router :Router){
  };

  showUserHandler(userInfo:User){
    this.userName=userInfo.name;
  }
  ngOnInit(): void {
    // this.height=$(window).height()+"px";
    //
    // // $("#duyi").css("height","950px");
    // $("#duyi").css("height","950px");
    // console.log($("#duyi"))
    // console.log(this.height)
  }
}

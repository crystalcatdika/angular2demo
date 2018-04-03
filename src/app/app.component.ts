import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./login/login.component";

// declare var $:any;
import * as $ from "jquery"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
   height:string;
  constructor(private router :Router){
    // require('admin-lte')
  };
  ngAfterViewInit(){
    this.height=$(window).height()+"px";
    $("#duyi").css({"height":this.height,"backgroundColor":'black'});
    console.log(`<div><span>${this.height}</span></div>`)
    }
  ngOnInit(): void {
  }

  kais():string{
    return"qer"
  }

}

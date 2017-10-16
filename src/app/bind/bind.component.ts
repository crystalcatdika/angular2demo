import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  birthday:Date =new Date();
  pi:number=3.1415926;
  size:number=89;
  // Observable 被观察者 生成流
  // e=>console.log(e),err=>console.error(err) 观察者 处理流
  searchInput:FormControl=new FormControl();
  constructor() {
    Observable.from([1,2,3,4])
      .filter(e=>e%2==0)
      .map(e=>e*e)
      .subscribe(
        e=>console.log(e),
        err=>console.error(err)
      );
    this.searchInput.valueChanges
      .debounceTime(2000)
      .subscribe( stockcode=>this.getStockInfo(stockcode))
  }

  ngOnInit() {
  }

  onkey(value:string){
    // console.log(event.target.value)
    console.log(value)
  }

  getStockInfo(value:string){
    // console.log(event.target.value)
    console.log(value)
  }

}

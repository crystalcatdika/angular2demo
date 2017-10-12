import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pine',
  templateUrl: './pine.component.html',
  styleUrls: ['./pine.component.css']
})
export class PineComponent implements OnInit {
  imgUrl:string="http://placehold.it/40x32"
  canshow:boolean=true;
  size:number=12;
  changesmall:boolean=false;
  divClass:any={
    a:false,
    b:false,
    c:false
  }
  classStyle:any={
    color:'red',
    background:'yellow'
  }
  name:string="helen";
  constructor() {
    setTimeout(()=>{
      this.changesmall=true;
      this.divClass={
        a:true,
        b:true,
        c:true
      };
      this.classStyle={
        color:'blue',
        background:'pink'
      }
    },3000)
  }

  ngOnInit() {
  }
  doOnClick(event:any){
    console.log(event)
  }
  doOnInput(event:any){
    console.log(event.target.value);
    console.log(event.target.getAttribute('value'))
  }




}

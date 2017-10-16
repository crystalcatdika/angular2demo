import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-gouzi',
  templateUrl: './gouzi.component.html',
  styleUrls: ['./gouzi.component.css']
})
export class GouziComponent implements OnInit,OnChanges {
  constructor() {
    // this.logIt("constructor")
  }
  @Input()
  greeting:string;
  @Input()
  user:{name:string}
  message:string='初始化'
  // private logIndex:number=1;
  // ${logIndex++}

  logIt(msg:string){
    // console.log(`# ${msg}`)
  }
  ngOnInit() {
    // this.logIt("ngOninit")
  }
  ngOnChanges(changes:SimpleChanges):void{
    // console.log(JSON.stringify(changes,null,2))
  }

}

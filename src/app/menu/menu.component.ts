import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input()
  menuUserName:string;
  menus:Array<Menu>;
  currentId : number;
  constructor(public router:Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1,"首页","allbox/home"),
      new Menu(2,"日程","allbox/address"),
      new Menu(3,"数据请求","allbox/httpdata"),
      new Menu(4,"依赖注入","allbox/zhuService")
    ]
  }

  nav(menu:Menu){
    this.currentId = menu.id;
    this.router.navigateByUrl(menu.link);
  }
}

export class Menu{
  constructor(public  id:number,public name:string,public link:string){

  }
}

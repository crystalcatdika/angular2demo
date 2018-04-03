import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import { Http, RequestOptions,RequestOptionsArgs,Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
// import { CookieService } from 'ngx-cookie';
import * as $ from "jquery"
// declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userSource: Observable<any>;
  public panduan:number;
  protected file:string;
  private userOneName:string;
  passwordNum:string;
  remember:boolean;

  prod:number;
  id:number;
  name:string;
  huanhanstr:string;
  prodirList:any=[
    {id:1,name:"男"},
    {id:2,name:"女"},
  ];
  child:string="添加child"
  selectProd(er){
    console.log(er)
  }
  // JSON.stringify({username:"abc",password:123})
  private body:string;
  private headers = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded' });
  private myHeaders:Headers=new Headers();
  constructor(public router:Router,public http: Http  ){
    // let myHeaders:Headers=new Headers();
    // myHeaders.append("Authorization","basic123456")
    this.myHeaders.append('Content-Type','application/x-www-form-urlencoded');
    // this.myHeaders.append("Authorization","basic123456")
  }

  ngOnInit(): void {
    // let user:User=new User();
    // user.name="zhang";
    // user.password=121;
    // console.log(user)
    let user="124"
    console.log(user)
    this.huanhanstr=`aaa
    bbb
    ccc
    `
    console.log(`<div><span>登录
</span></div>`)

    console.log(this.huanhanstr)

    $("#login").append(`<div>
                            <b>${this.child}</b>
                            <b>换行没关系</b>
                          </div>`).append(`${this.addchild()}`)

    var myArray=[1,2,3,4]
    // myArray.desc="four number"
    // for(var n in myArray){
    //   console.log(n)
    // }
    for(let n of myArray){
      if(n>2)break;
      console.log(n)
    }
    for (let n of "four number"){
      console.log(n)
    }
  }

  addchild(){
    // return "<div>kaikai</div>"
    return `<div><b>${this.child}</b></div>`
  }



  createUser(info:any){
    console.log(info);
    this.userOneName=info.username;
    this.passwordNum=info.password;
    this.remember=info.remember;
    this.body= "userName="+this.userOneName+"&password="+this.passwordNum;
    this.userSource = this.http.post('http://192.168.0.167:8088/gtjajsplw/app/loginservice',this.body,{headers:this.myHeaders})
      .map(response =>response.json());
    this.userSource.subscribe(
      data => {this.panduan = data.code
        console.log(data.code);
        console.log(data.message);
        console.log(data.data)
        console.log(this.panduan)
      }
    );
    // if(this.panduan==0){
    //   this.router.navigateByUrl("allbox/home");
    this.router.navigate(["allbox/home",this.userOneName])
    // }
  }

  // @Output()
  // showUser:EventEmitter <User>=new EventEmitter();
  //

  // makechange(){
  //   // this.showUser.emit(this.user)
  // }

}

export class User{
  constructor(public name:string,public password:number){}
}
var pq=new User("kashi",123)
console.log(pq)

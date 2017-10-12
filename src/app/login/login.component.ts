import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import { Http, RequestOptions,RequestOptionsArgs,Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

// import { CookieService } from 'ngx-cookie';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userSource: Observable<any>;
  panduan:number;
  userOneName:string;
  passwordNum:string;
  remember:boolean;
  file:string
  // JSON.stringify({username:"abc",password:123})
  private body:string = "userName="+"admin"+"&password="+"1234";
  private headers = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded' });
  constructor(public router:Router,public http: Http  ){
  // ,private _cookieService:CookieService
    this.userSource = this.http.post('http://192.168.0.167:8088/gtjajsplw/app/loginservice',this.body,{headers: this.headers})
      .map(response =>response.json());

  }
  ngOnInit(): void {
   // this._cookieService.put();
   //  console.log(this._cookieService)
    this.userSource.subscribe(
      data => {this.panduan = data.code
        console.log(data.code);
        console.log(data.message);
        console.log(data.data)
        console.log(this.panduan)
      }
    )
  }
  createUser(info:any){
    console.log(info);
    this.userOneName=info.username;
    this.passwordNum=info.password;
    this.remember=info.remember;
    this.file=info.fileName
    console.log(this.remember)
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
  constructor(public name:string,public password:number){

}
}

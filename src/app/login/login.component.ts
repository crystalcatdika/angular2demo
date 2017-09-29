import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import { Http, RequestOptions,RequestOptionsArgs,Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";



declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit{
  userSource: Observable<any>;
  panduan:boolean;
  userOneName:string;
  passwordNum:string;

  // JSON.stringify({username:"abc",password:123})
  body:string = "username="+"dika"+"&password="+"1234";
  private headers = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded' });
  constructor(public router:Router,public http: Http){
    this.userSource = this.http.post('http://192.168.0.168:8083/EasyuiDemo/TestServlet',this.body,{headers: this.headers})
      .map(response =>response.json());
  };
  createUser(info:any){
    console.log(info);
    this.userOneName=info.username;
    this.passwordNum=info.password;
    if(this.panduan){
      this.router.navigateByUrl("allbox/address");
    }
  }



  ngOnInit(): void {
   /* $().ready(function() {
      $("#login_form").validate({
        rules: {
          username: "required",
          password: {
            required: true,
            minlength: 5
          },
        },
        messages: {
          username: "请输入姓名",
          password: {
            required: "请输入密码",
            minlength: jQuery.format("密码不能小于{0}个字 符")
          },
        }
      });
      $("#register_form").validate({
        rules: {
          username: "required",
          password: {
            required: true,
            minlength: 5
          },
          rpassword: {
            equalTo: "#register_password"
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          username: "请输入姓名",
          password: {
            required: "请输入密码",
            minlength: jQuery.format("密码不能小于{0}个字 符")
          },
          rpassword: {
            equalTo: "两次密码不一样"
          },
          email: {
            required: "请输入邮箱",
            email: "请输入有效邮箱"
          }
        }
      });
    });
    $(function() {
      $("#register_btn").click(function() {
        $("#register_form").css("display", "block");
        $("#login_form").css("display", "none");
      });
      $("#back_btn").click(function() {
        $("#register_form").css("display", "none");
        $("#login_form").css("display", "block");
      });
    });*/
    this.userSource.subscribe(
      data => {this.panduan = data;
        console.log(this.panduan[0].login)
        this.panduan=this.panduan[0].login
      }
    )
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

import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-activeform',
  templateUrl: './activeform.component.html',
  styleUrls: ['./activeform.component.css']
})
export class ActiveformComponent implements OnInit {
  // private nickName=new FormControl('tom');
  // private passwordInfo=new FormGroup({
  //   password:new FormControl(),
  //   passwordConfirm:new FormControl()
  // });
  // private emails=new FormArray([
  //   new FormControl('a@a.com'),
  //   new FormControl('b@a.com')
  // ]);
  private formModel:FormGroup;
  private fb:FormBuilder=new FormBuilder();
  constructor() {
    // this.formModel=new FormGroup({
    //   nickName:new FormControl(),
    //   emails:new FormArray([
    //     new FormControl(),
    //   ]),
    //   mobile:new FormControl(),
    //   passwordInfo:new FormGroup({
    //     password:new FormControl(),
    //     passwordConfirm:new FormControl()
    //   })
    // })
    // formBuilder简化代码
    this.formModel=this.fb.group({
      nickName:[''],
      emails: this.fb.array([
        ['kkkkkkk'],
      ]),
      mobile:[''],
      passwordInfo:this.fb.group({
        password:[''],
        passwordConfirm:[''],
      })
    })

  }

  addEmail(){
    let emails=this.formModel.get('emails') as FormArray;
    emails.push(new FormControl())
    console.log(this.formModel.value)
  }
  createUser(){
    console.log(this.formModel.value)
  }

  ngOnInit() {
  }

}

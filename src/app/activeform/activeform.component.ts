import { Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader,Headers} from 'ng2-file-upload';

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
  // private thhe:Array<Headers>;
  // private header = new Headers( { 'Content-Type': 'application/x-www-form-urlencoded' });
  private uploader:FileUploader = new FileUploader({
    // url: "https://evening-anchorage-3159.herokuapp.com/api/",
    url:"http://192.168.0.139:8080/gtja/upload",
    method: "POST",
    itemAlias: "uploadedfile",
    // headers: [{name: "myCustomHeader", value:"some value"}]
    //   multipart/form-data text/plain
    headers: [{name: "Content-Type", value:"application/x-www-form-urlencoded"}]
  });


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
    console.log(this.uploader)
    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
        console.log(1212)
      }else {
        // 上传文件后获取服务器返回的数据错误
      }
    };
    this.uploader.queue[0].upload(); // 开始上传


  }



  selectedFileOnChanged() {
    // 这里是文件选择完成后的操作处理
  }


  ngOnInit() {
  }

}

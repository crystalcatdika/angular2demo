import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})

export class HttpdataComponent implements OnInit {
  dataSource: Observable<any>;
  phonedata = [];
  constructor(public http: Http) {

    this.dataSource = this.http.get('http://192.168.0.168:8083/EasyuiDemo/PhoneServlet')
      .map(response =>response.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      data => {
        this.phonedata = data;
      console.log(this.phonedata)
      }
    )

  }

}

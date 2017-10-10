import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-allbox',
  templateUrl: './allbox.component.html',
  styleUrls: ['./allbox.component.css']
})
export class AllboxComponent implements OnInit {
  private homeId:string;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.homeId=this.routeInfo.snapshot.params["id"]
  }

}

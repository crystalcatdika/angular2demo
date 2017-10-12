import { Component, OnInit } from '@angular/core';

// import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  // constructor(private _cookieService:CookieService) { }
  // getCookie(key: string){
  //   return this._cookieService.get(key);
  // }
  ngOnInit() {
    // this._cookieService.put()
    // console.log(this._cookieService)
  }
}

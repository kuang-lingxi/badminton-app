import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: string = "首页";

  showLeft: boolean = false;

  titleList: string[] = ["首页"];

  leftList: boolean[] = [false];

  type: string;

  textarea: boolean;

  value: string;

  isSubmit: boolean = false;

  constructor(
    private location: Location,
    private router: Router,
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  back() {
    this.titleList.pop();
    this.title = this.titleList[this.titleList.length-1];
    this.leftList.pop();
    this.showLeft = this.leftList[this.leftList.length-1];
    this.location.back();

    this.isSubmit = false;
  }

  go(title: string, showLeft: boolean, url?: string) {
    this.titleList.push(title);
    this.leftList.push(showLeft);
    this.title = title;
    this.showLeft = showLeft;
    url && this.router.navigateByUrl(url);
  }

  clear(title: string, showLeft: boolean) {
    this.titleList = [title];
    this.leftList = [showLeft];
    this.title = title;
    this.showLeft = showLeft;

    this.isSubmit = false;
  }

  submit() {
    // this.isSubmit = false;
    switch(this.type) {
      case 'feedback': this.feedback().subscribe();this.back();break;
      default:this.user().subscribe();this.back();break;
    }

    this.value = "";
  }

  feedback() {
    let user = this.cookieService.get("username");
    let time = new Date().getTime();
    const params = {
      user,
      time,
      content: this.value
    }
    return this.http.post("api/feedback/insert", params);
  }

  user() {
    const params = {
      type: this.type,
      value: this.value,
      uid: this.cookieService.get("uid")
    }
    return this.http.post("api/user/update", params);
  }
}

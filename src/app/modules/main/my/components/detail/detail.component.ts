import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../../environments/environment';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  userInfo: any;

  environment = environment;

  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private location: Location,
    private router: Router,
    private dataServer: DataService
  ) { }

  ngOnInit() {
    const uid = parseInt(this.cookieService.get("uid"));
    this.userService.getUserDetail(uid).subscribe(resp => {
      if(resp.code === 0) {
        this.userInfo = resp.message.detail;
      }
    });
  }

  referee() {
    const uid = this.cookieService.get("uid");
    window.location.href = `${this.environment.managementUrl}/enroll/referee?uid=${uid}`;
  }

  feedback() {
    
  }

  signOut() {
    this.router.navigateByUrl('/login');
  }

  history() {
    this.dataServer.go("参赛记录", true);
    this.router.navigateByUrl('/main/my/history')
  }

  level(grade) {
    if(grade < 100) {
      return "D";
    }else if(grade < 200) {
      return "C";
    }else if(grade < 300) {
      return "C+";
    }else if(grade < 400) {
      return "B";
    }else if(grade < 500) {
      return "B+";
    }else if(grade < 600) {
      return "A";
    }else {
      return "A+";
    }
  }

  operate = {
    'username': () => {
      this.dataServer.type = 'username';
      this.dataServer.textarea = false;
      this.dataServer.go('修改用户名', true);
      this.dataServer.isSubmit = true;
    },
    'email': () => {
      this.dataServer.type = 'email';
      this.dataServer.textarea = false;
      this.dataServer.go('修改电子邮箱', true);
      this.dataServer.isSubmit = true;
    },
    'introduce': () => {
      this.dataServer.type = 'introduce';
      this.dataServer.textarea = true;
      this.dataServer.go('修改自我介绍', true);
      this.dataServer.isSubmit = true;
    },
    'feedback': () => {
      this.dataServer.type = 'feedback';
      this.dataServer.textarea = true;
      this.dataServer.go('用户反馈', true);
      this.dataServer.isSubmit = true;
    }
  }

  navigate(url: string, type: string) {
    this.router.navigateByUrl(url);
  }

  change(type: string) {
    this.operate[type]();
    this.navigate("main/my/change", type);
  }

}

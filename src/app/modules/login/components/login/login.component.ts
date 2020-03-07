import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;

  constructor(
    private loginService:LoginService,
    private router: Router,
    private _toast: ToastService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username, this.password, false).subscribe(response => {
      if(response.code === 0) {
        if(response.message.result) {
          this.loginService.setCookie("access_token", response.message.token, false);
          this.loginService.setCookie("username", this.username, false);
          this.router.navigateByUrl("/main/home");
        }else {
          const toast = this._toast.fail('用户名或密码错误', 1000);
        }
      }
    })
  }

}

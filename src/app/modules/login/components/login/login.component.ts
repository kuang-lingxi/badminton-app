import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username, this.password, false).subscribe(resp => {
      console.log(resp);
    })
  }

}

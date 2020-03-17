import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../../environments/environment';

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
    private cookieService: CookieService
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

}

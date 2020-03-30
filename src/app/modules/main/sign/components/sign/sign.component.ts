import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { SignService } from '../../service/sign.service';
import { CookieService } from 'ngx-cookie-service';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  matchList = [
    
  ]

  constructor(
    private router: Router,
    private signService: SignService,
    private cookieService: CookieService,
    private _toast: ToastService
  ) { }

  ngOnInit() {
    const uid = parseInt(this.cookieService.get("uid"));
    this.signService.joinMatch(uid).subscribe(resp => {
      if(resp.code === 0) {
        this.matchList = resp.message.matchList;
      }
    })
  }

  getPosition() {
    console.log("position")
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("success")
      console.log(position);
    }, (err) => {
      console.log("error")
      console.log(err);
    })
  }

  formatPercentage(num1, num2) {
    return `${parseFloat(((num1/num2).toFixed(2)))*100}%`;
  }

  open(id: number) {
    this.signService.getMatch(id).subscribe(resp => {
      if(resp.code === 0) {
        // if(resp.message.detail.status !== 0) {
          this.router.navigateByUrl(`/main/sign/operate/${id}`);
        // }else {
        //   const toast = this._toast.fail('该比赛暂未开启', 1000);
        // }
      }
    })
  }

}

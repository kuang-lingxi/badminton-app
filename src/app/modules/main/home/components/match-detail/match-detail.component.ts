import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';
import { ModalService } from 'ng-zorro-antd-mobile';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {

  thumbStyle = {
    width: '32px',
    height: '32px'
  };

  id: number;

  detail: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private _modal: ModalService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.homeService.getMatchDetail(this.id).subscribe(resp => {
      if(resp.code === 0) {
        this.detail = resp.message.detail;
        this.detail.prize = this.detail.prize.split("\n").join("<br/>")
      }
    })
  }

  ngOnDestroy() {
    
  }

  showCustom() {
    this._modal.alert('选择打开方式', '是否使用本账号进行报名？', [
      { text: '否', onPress: () => {
        window.location.href = `http://localhost:4201/enroll/${this.id}`
      } },
      {
        text: '是',
        onPress: () => {
          const uid: number = parseInt(this.cookieService.get("uid"))          
          this.homeService.getUserDetail(uid).subscribe(resp => {
            if(resp.code === 0) {
              window.location.href = `http://localhost:4201/enroll/${this.id}?schoolNumber=${resp.message.detail.schoolNumber}`;
            }
          })
        },
        style: {
          color: '#ffffff',
          background: '#00ff00'
        }
      }
    ]);
  }

}

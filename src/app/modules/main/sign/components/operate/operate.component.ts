import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'ng-zorro-antd-mobile';
import { SignService } from '../../service/sign.service';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.scss']
})
export class OperateComponent implements OnInit {

  id: number;

  uid: number;

  showAgainst: boolean = false;

  teamId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _modal: ModalService,
    private router: Router,
    private signService: SignService,
    private cookieService: CookieService,
    private dataServer: DataService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.uid = parseInt(this.cookieService.get("uid"));
    this.signService.against(this.id, this.uid).subscribe(resp => {
      if(resp.code === 0) {
        if(resp.message.result) {
          this.showAgainst = resp.message.result;
          this.teamId = resp.message.teamId;
        }
      }
    })
  }

  sign() {
    this._modal.alert('确认', '确认进行签到操作？', [
      { text: '否', onPress: () => {
        
      } },
      {
        text: '是',
        onPress: () => {
          
        },
        style: {
          color: '#ffffff',
          background: '#00ff00'
        }
      }
    ]);
  }

  arrange() {
    this.dataServer.go("对阵表", true);
    this.router.navigateByUrl(`/main/sign/arrange/${this.id}`);
  }

  people() {
    this.dataServer.go("人员排列", true);
    this.router.navigateByUrl(`/main/sign/against/${this.id}?teamId=${this.teamId}`);
  }
}

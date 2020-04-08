import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereeService } from '../../service/referee.service';
import { CookieService } from 'ngx-cookie-service';
import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private refereeService: RefereeService,
    private cookieService: CookieService,
    private _modal: ModalService
  ) { }

  list: any = [];

  ngOnInit() {
    const uid = parseInt(this.cookieService.get("uid"));
    this.refereeService.getRefereeList(uid).subscribe(resp => {
      if(resp.code === 0) {
        this.list = resp.message.matchResult;
      }
    })
  }

  referee(id: number) {
    this._modal.prompt(
      '请输入该局比赛上限分数',
      '',
      [{ text: 'Cancel' }, { text: 'Submit', onPress: value => {
        this.router.navigateByUrl(`main/referee/detail/${id}?max=${value}`)
      } }],
    );
  }

}

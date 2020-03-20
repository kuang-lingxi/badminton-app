import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereeService } from '../../service/referee.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private refereeService: RefereeService,
    private cookieService: CookieService
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
    this.router.navigateByUrl(`main/referee/detail/${id}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignService } from '../../service/sign.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.scss']
})
export class ArrangeComponent implements OnInit {

  matchId: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private signService: SignService,
    private cookieService: CookieService
  ) { }

  message: any;

  ngOnInit() {
    this.matchId = parseInt(this.activeRoute.snapshot.paramMap.get("id"));
    const uid = parseInt(this.cookieService.get("uid"));
    this.signService.getUserMatch(uid, this.matchId).subscribe(resp => {
      this.message = resp.message;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../service/home.service';

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
    private homeService: HomeService
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

}

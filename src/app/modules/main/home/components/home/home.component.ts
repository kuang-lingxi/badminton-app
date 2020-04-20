import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '184px'
  };

  imgUrl: string;

  activeKey = [1];

  accordions: Array<any> = [

  ];

  noticeList = [
    {id: 0, title: '第一条公告', content: '这是第一条公告的内容', time: 1580808088000, top: 1},
    {id: 1, title: '第一条公告', content: '这是第一条公告的内容', time: 1580808088000, top: 1},
    {id: 2, title: '第一条公告', content: '这是第一条公告的内容', time: 1580808088000, top: 1},
    {id: 3, title: '第一条公告', content: '这是第一条公告的内容', time: 1580808088000, top: 0},
    {id: 4, title: '第一条公告', content: '这是第一条公告的内容', time: 1580808088000, top: 0},
    {id: 5, title: '第一条公告', content: '这是第一条公告的内容', time: 1580808088000, top: 0},
  ]

  modal = {0: false, 1: false, 2: false, 3: false,4: false, 5: false}

  constructor(
    private homeService: HomeService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.homeService.showNotices().subscribe(resp => {
      if(resp.code === 0) {
        this.noticeList = resp.message.notices;
      }
    })
    this.homeService.showMatches().subscribe(resp => {
      if(resp.code === 0) {
        this.accordions = resp.message.matches;
      }
    })
    this.homeService.getImg().subscribe((resp: any) => {
      this.imgUrl = resp.imgUrl;
    })
  }

  onClose(id) {
    this.modal[id] = false;
  }

  onChange(event) {
    console.log(event);
  }

  linkDetail() {
    this.dataService.go("比赛详情", true);
  }

}

import { Component, OnInit } from '@angular/core';

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

  activeKey = [1];

  accordions: Array<any> = [
    { title: '3v3趣味赛', introduce: '3v3趣味赛介绍', beginTime: 1580808088000, endTime: 1580808088000},
    { title: '3v3趣味赛', introduce: '3v3趣味赛介绍', beginTime: 1580808088000, endTime: 1580808088000},
    { title: '3v3趣味赛', introduce: '3v3趣味赛介绍', beginTime: 1580808088000, endTime: 1580808088000}
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

  constructor() { }

  ngOnInit() {
  }

  onClose(id) {
    this.modal[id] = false;
  }

  onChange(event) {
    console.log(event);
  }

  

}

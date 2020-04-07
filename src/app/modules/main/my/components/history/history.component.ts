import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  matchList = [
    {
      name: '团体赛',
      type: '团体赛',
      prize: '第一轮淘汰',
      matchDetail: [
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
      ]
    },
    {
      name: '团体赛',
      type: '团体赛',
      prize: '第一轮淘汰',
      matchDetail: [
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
      ]
    },
    {
      name: '团体赛',
      type: '团体赛',
      prize: '第一轮淘汰',
      matchDetail: [
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
        {arrange: '测试用户一对阵测试用户二', result: '14-21', address: '一号场', referee: '裁判1', roundText: '淘汰赛'},
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

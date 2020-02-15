import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  userInfo = {
    imgUrl: 'assets/xiao.jpg',
    name: 'klx',
    sex: 1,
    level: 'A',
    grade: 50,
    referee: 1
  }

  constructor() { }

  ngOnInit() {
  }

}

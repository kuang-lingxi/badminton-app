import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-against',
  templateUrl: './against.component.html',
  styleUrls: ['./against.component.scss']
})
export class AgainstComponent implements OnInit {

  name = "选择";

  valueList = [];

  data = [];

  map = {

  }

  peopleList = [
    {uid: 0, name: 'klx1'},
    {uid: 1, name: 'klx2'},
    {uid: 2, name: 'klx3'},
    {uid: 3, name: 'klx4'},
    {uid: 4, name: 'klx5'},
    {uid: 5, name: 'klx6'},
    {uid: 6, name: 'klx7'},
    {uid: 7, name: 'klx8'}
  ]

  type = [

  ]

  oldType = [

  ]

  seasons = [
    1,
    2,
    3,
    4
  ]

  constructor(
    private _toast: ToastService
  ) { }

  ngOnInit() {
    this.peopleList.forEach(people => {
      this.data.push(people.name);
    })
    this.dataInit([]);
  }

  find(name) {
    for(let people of this.peopleList) {
      if(people.name === name) return people.uid;
    }
  }

  submit() {
    let userList = []
    this.valueList.forEach(item => {
      userList.push(item[0]);
    })
    userList = [...new Set(userList)];
    if(userList.length === this.valueList.length) {
      this.oldType.forEach((item, index) => {
        if(item.num > 1) {
          console.log({type: item.type, user: this.find(this.valueList[index][0])+"-"+this.find(this.valueList[index+1][0]), num: item.num})
        }else {
          console.log({type: item.type, user: this.find(this.valueList[index][0]), num: 1})
        }
      })
    }else {
      this._toast.fail("人选不能重复, 请重试");
    }
    
  }

  dataInit(oldType) {
    oldType = [
      {type: 0, text: '男单', num: 1},
      {type: 1, text: '女单', num: 1},
      {type: 2, text: '男双', num: 2},
      {type: 3, text: '女双', num: 2},
      {type: 4, text: '混双', num: 2},
    ]
    this.oldType = oldType;
    oldType.forEach(item => {
      if(item.num > 1) {
        this.type.push({type: `${item.type}-0`, text: `${item.text}一`});
        this.type.push({type: `${item.type}-1`, text: `${item.text}二`});
        this.valueList.push([], []);
      }else {
        this.type.push({...item});
        this.valueList.push([]);
      }
    })

  }

}

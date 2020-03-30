import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
import { ActivatedRoute } from '@angular/router';
import { SignService } from '../../service/sign.service';

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

  };

  matchId: number;

  teamId: number;

  peopleList = [
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
    private _toast: ToastService,
    private activatedRoute: ActivatedRoute,
    private signService: SignService
  ) { }

  ngOnInit() {
    this.matchId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    this.teamId = parseInt(this.activatedRoute.snapshot.queryParamMap.get("teamId"));
    this.signService.getPeopleList(this.teamId).subscribe(resp => {
      if(resp.code === 0) {
        this.peopleList = resp.message.userList;
        this.peopleList.forEach(people => {
          this.data.push(people.name);
        })
      }
    })

    this.signService.getMatchType(this.matchId).subscribe(resp => {
      if(resp.code === 0) {
        this.type = resp.message.matchType;
        this.dataInit(this.type);
      }
    })
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';
import { RefereeService } from '../../service/referee.service';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  num1: number = 0;

  num2: number = 0;

  id: number;

  refereeMessage;

  max: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private _modal: ModalService,
    private refereeService: RefereeService,
    private _toast: ToastService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activeRoute.snapshot.paramMap.get("id"));
    this.max = parseInt(this.activeRoute.snapshot.queryParamMap.get("max"));
    this.refereeService.getMatchResult(this.id).subscribe(resp => {
      this.refereeMessage = resp
    })
  }

  change1(op: string) {
    if(op === 'add') {
      this.num1++;
    }else if(op === 'low' && this.num1 > 0){
      this.num1--;
    }

    this.check();
  }

  change2(op: string) {
    if(op === 'add') {
      this.num2++;
    }else if(op === 'low' && this.num2 > 0){
      this.num2--;
    }

    this.check();
  }

  submit() {
    this._modal.alert('确认提交', '确认本场比赛已结束并提交该场成绩？', [
      { text: '否', onPress: () => {
        
      } },
      {
        text: '是',
        onPress: () => {    
          this.refereeService.updateResult(this.id, `${this.num1}-${this.num2}`).subscribe(resp => {
            if(resp.code === 0) {
              if(resp.message.result) {
                this._toast.success("提交成功！", 1000);
              }else {
                this._toast.fail("提交失败", 1000);
              }
            }
          })
        },
        style: {
          color: '#ffffff',
          background: '#00ff00'
        }
      }
    ]);
  }

  check() {
    console.log("check")
    if(this.num1 === this.max || this.num2 === this.max) {
      this.refereeService.updateResult(this.id, `${this.num1}-${this.num2}`).subscribe(resp => {
        if(resp.code === 0) {
          this._toast.success("比赛结束！", 5000);  
          this.change1 = function(){};
          this.change2 = function(){};
        }
      })
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-operate',
  templateUrl: './operate.component.html',
  styleUrls: ['./operate.component.scss']
})
export class OperateComponent implements OnInit {

  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _modal: ModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
    console.log(this.id);
  }

  sign() {
    this._modal.alert('确认', '确认进行签到操作？', [
      { text: '否', onPress: () => {
        
      } },
      {
        text: '是',
        onPress: () => {
          
        },
        style: {
          color: '#ffffff',
          background: '#00ff00'
        }
      }
    ]);
  }

  arrange() {
    this.router.navigateByUrl(`/main/sign/arrange/${this.id}`);
  }
}

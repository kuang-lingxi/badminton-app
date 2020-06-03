import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastService } from 'ng-zorro-antd-mobile';

const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  files = [];

  multiple = false;

  selectable = true;

  sexData: string[] = ['男', '女'];

  sex = ['男'];

  sexText = "男"

  username: string;

  password: string;

  confirm: string;

  name: string;

  schoolNumber: string;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private _toast: ToastService
  ) { }

  ngOnInit() {
  }

  fileChange(params) {
    const { files, type, index } = params;
    this.files = files;

    if(this.files.length > 0) {
      this.selectable = false;
    }else {
      this.selectable = true;
    }
  }

  sexChange(result) {
    this.sexText = result;
  }

  register() {
    if(this.password !== this.confirm) {
      this._toast.fail("两次输入的密码不一致!");

      return ;
    }

    let regx = /^[0-9]{10}$/;

    if(!regx.test(this.schoolNumber)) {
      this._toast.fail("学号只能为10位数字!");

      return ;
    }
    this.registerService.register(this.username, this.password, this.name, this.schoolNumber, (this.sex[0] === '男' ? 0 : 1)).subscribe(resp => {
      // this._toast.success('注册成功！', 1000, () => {
      //   this.router.navigateByUrl('/login');
      // })
    })
  }

}

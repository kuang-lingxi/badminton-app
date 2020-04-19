import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/register.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

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
    private router: Router
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
    this.registerService.register(this.username, this.password, this.name, this.schoolNumber, (this.sex[0] === '男' ? 0 : 1)).subscribe(resp => {
      this.router.navigateByUrl('/main');
    })
  }

}

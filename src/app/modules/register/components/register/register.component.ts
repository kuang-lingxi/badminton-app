import { Component, OnInit } from '@angular/core';

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

  sex = [];

  sexText = "男"

  constructor() { }

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
    console.log(this.sex)
  }

}

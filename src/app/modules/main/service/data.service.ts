import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: string = "首页";

  showLeft: boolean = false;

  titleList: string[] = ["首页"];

  leftList: boolean[] = [false];

  constructor(
    private location: Location
  ) { }

  back() {
    this.titleList.pop();
    this.title = this.titleList[this.titleList.length-1];
    this.leftList.pop();
    this.showLeft = this.leftList[this.leftList.length-1];
    this.location.back();
  }

  go(title: string, showLeft: boolean) {
    this.titleList.push(title);
    this.leftList.push(showLeft);
    this.title = title;
    this.showLeft = showLeft;
  }
}

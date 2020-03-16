import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  matchList = [
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'},
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'},
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'},
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'},
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'},
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'},
    {id: 0, name: '3v3趣味赛', already: 3, num: 10, begTime: 1580808088000, endTime:1580808088000, address: '体育馆'}
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  getPosition() {
    console.log("position")
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("success")
      console.log(position);
    }, (err) => {
      console.log("error")
      console.log(err);
    })
  }

  formatPercentage(num1, num2) {
    return `${parseFloat(((num1/num2).toFixed(2)))*100}%`;
  }

  open(id: number) {
    console.log(id);
    this.router.navigateByUrl(`/main/sign/operate/${id}`);
  }

}

import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

}

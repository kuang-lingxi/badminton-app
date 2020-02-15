import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList: any = [
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'},
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'},
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'},
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'},
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'},
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'},
    {id: 0, name: '手胶', value: 10, imgUrl: 'assets/xiao.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

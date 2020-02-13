import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  hidden: boolean = false;

  fullScreen: boolean = false;

  topFlag: boolean = false;

  tintColor: string = '#108ee9';

  unselectedTintColor: string = '#888';

  tabbarStyle: object = {
    position: 'fixed',
    height: 'calc(100% - 45px)',
    width: '100%',
    top: '45px'
  };

  selectedIndex: number = 1;

  constructor() { }

  ngOnInit() {
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }

}

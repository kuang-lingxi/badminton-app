import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

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

  selectedIndex: number = 0;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {

  }

  tabBarTabOnPress(pressParam: any) {
    this.selectedIndex = pressParam.index;
    this.router.navigateByUrl(`main/${pressParam.title.toLowerCase()}`)
  }

}

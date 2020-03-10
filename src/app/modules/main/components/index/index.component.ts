import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart, ActivatedRoute } from '@angular/router';
import { NavigationEnum } from '../../data/navigation.enum';
import { DataService } from '../../service/data.service';
import { Location } from '@angular/common';

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

  title: string = "首页";
  
  tabbarStyle: object = {
    position: 'fixed',
    height: 'calc(100% - 45px)',
    width: '100%',
    top: '45px'
  };

  navigation: any = NavigationEnum

  selectedIndex: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) {

  }

  ngOnInit() {
    const url = this.router.url.split('/')
    const route = url[2];
    this.selectedIndex = this.navigation[route];
  }

  tabBarTabOnPress(pressParam: any) {
    this.selectedIndex = pressParam.index;
    this.router.navigateByUrl(`main/${pressParam.title.toLowerCase()}`);
    this.dataService.title = pressParam.title;
    this.dataService.showLeft = false;
  }

  onLeftClick() {
    this.location.back();
  }
}

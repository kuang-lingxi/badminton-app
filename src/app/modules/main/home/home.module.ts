import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';


@NgModule({
  declarations: [HomeComponent, MatchDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SelfCommonModule
  ]
})
export class HomeModule { }

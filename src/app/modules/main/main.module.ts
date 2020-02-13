import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../common/common.module';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SelfCommonModule
  ]
})
export class MainModule { }

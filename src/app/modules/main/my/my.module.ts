import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { MyRoutingModule } from './my-routing.module';
import { DetailComponent } from './components/detail/detail.component';
import { HistoryComponent } from './components/history/history.component';


@NgModule({
  declarations: [DetailComponent, HistoryComponent],
  imports: [
    CommonModule,
    MyRoutingModule,
    SelfCommonModule
  ]
})
export class MyModule { }

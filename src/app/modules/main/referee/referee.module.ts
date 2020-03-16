import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { RefereeRoutingModule } from './referee-routing.module';
import { ListComponent } from './components/list/list.component';
import { RefereeComponent } from './components/referee/referee.component';


@NgModule({
  declarations: [ListComponent, RefereeComponent],
  imports: [
    CommonModule,
    RefereeRoutingModule,
    SelfCommonModule
  ]
})
export class RefereeModule { }

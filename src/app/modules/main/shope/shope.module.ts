import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { ShopeRoutingModule } from './shope-routing.module';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ShopeRoutingModule,
    SelfCommonModule
  ]
})
export class ShopeModule { }

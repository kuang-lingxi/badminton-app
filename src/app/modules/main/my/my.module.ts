import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { MyRoutingModule } from './my-routing.module';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    MyRoutingModule,
    SelfCommonModule
  ]
})
export class MyModule { }

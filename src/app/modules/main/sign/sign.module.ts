import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './components/sign/sign.component';
import { OperateComponent } from './components/operate/operate.component';
import { ArrangeComponent } from './components/arrange/arrange.component';


@NgModule({
  declarations: [SignComponent, OperateComponent, ArrangeComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    SelfCommonModule
  ]
})
export class SignModule { }

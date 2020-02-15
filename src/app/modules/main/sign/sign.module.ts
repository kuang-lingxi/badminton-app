import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { SignRoutingModule } from './sign-routing.module';
import { SignComponent } from './components/sign/sign.component';


@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    SelfCommonModule
  ]
})
export class SignModule { }

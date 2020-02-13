import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule } from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NgZorroAntdMobileModule,
    FormsModule
  ]
})
export class SelfCommonModule { }

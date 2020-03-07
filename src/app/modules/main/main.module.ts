import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../common/common.module';

import { MainRoutingModule } from './main-routing.module';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SelfCommonModule,
    HttpClientModule
  ],
  providers: [
    
  ],
})
export class MainModule { }

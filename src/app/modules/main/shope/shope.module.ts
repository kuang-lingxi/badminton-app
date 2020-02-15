import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfCommonModule } from '../../common/common.module';

import { ShopeRoutingModule } from './shope-routing.module';
import { ListComponent } from './components/list/list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [ListComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ShopeRoutingModule,
    SelfCommonModule
  ]
})
export class ShopeModule { }

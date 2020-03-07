import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { FormsModule } from "@angular/forms";
import { LoginService } from '../login/service/login.service';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NgZorroAntdMobileModule,
    FormsModule
  ],
  providers: [CookieService]
})
export class SelfCommonModule { }

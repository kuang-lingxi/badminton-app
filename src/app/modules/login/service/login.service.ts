import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Response } from '../../common/data/response';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  login(username: string, password: string, remember: boolean): Observable<Response> {
    let params = {
      username,
      password,
      remember
    }
    return this.http.post<Response>("api/user/login", params);
  }

  setCookie(key: string, value: string, remember: boolean = false) {
    if(remember) {
      this.cookieService.set(key, value);
    }else {
      document.cookie = `${key}=${value}`;
      // this.cookieService.set(key, value);
    }
  }
}

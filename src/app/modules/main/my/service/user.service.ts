import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modules/common/data/response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getUserDetail(uid: number): Observable<Response> {
    return this.http.get<Response>(`api/user/detail?uid=${uid}`);
  }
}

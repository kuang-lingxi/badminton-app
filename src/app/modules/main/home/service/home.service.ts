import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modules/common/data/response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  showNotices(): Observable<Response> {
    return this.http.get<Response>("api/notice/show");
  }

  showMatches(): Observable<Response> {
    return this.http.get<Response>("api/match/show");
  }
}
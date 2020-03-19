import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modules/common/data/response';

@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(
    private http: HttpClient
  ) { }

  getRefereeList(uid: number): Observable<Response> {
    return this.http.get<Response>(`api/match/userReferee?uid=${uid}`);
  }

  updateResult(id: number, grade: string): Observable<Response> {
    const params = {
      id,
      grade
    }
    return this.http.post<Response>("api/match/updateResult", params);
  }
}

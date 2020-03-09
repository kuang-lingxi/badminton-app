import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../../common/data/response';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }

  register(username: string, password: string, name: string, schoolNumber: string, sex: number) {
    const params = {
      username,
      password,
      name,
      schoolNumber,
      sex,
      match: 1,
      referee: 0,
      member: 0,
      grade: 0
    }
    return this.http.post("api/user/register", params);
  }
}

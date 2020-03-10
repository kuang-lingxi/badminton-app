import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: string = "首页";

  showLeft: boolean = false;

  constructor(
  ) { }
}

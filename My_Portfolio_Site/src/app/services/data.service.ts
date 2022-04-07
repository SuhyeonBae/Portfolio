import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static isDarkMode: Subject<boolean> = new Subject();
  static language: Subject<string> = new Subject();

  constructor() { }
}

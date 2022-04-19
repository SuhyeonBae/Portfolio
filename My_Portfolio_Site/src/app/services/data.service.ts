import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static isDarkMode: boolean;
  static toggleDarkMode: Subject<boolean> = new Subject();
  static language: Subject<string> = new Subject();

  constructor() { }
}

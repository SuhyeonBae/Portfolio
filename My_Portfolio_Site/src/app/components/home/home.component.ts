import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren }  from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('menu') public menu: ElementRef;
  @ViewChildren('languages') public lang: QueryList<ElementRef>;
  public isFirstPage: boolean = false;
  public isDarkMode: boolean = false;
  public languages: Array<any> = [{ value: 'en', label: 'ENG' }, { value: 'ko', label: 'KOR' }, { value: 'ja', label: 'JPN' }];
  public form: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    public router: Router,
    public service: DataService
  ) { }

  ngOnInit(): void {
    this.isFirstPage = this.router.url === '/';
    this.initForm();
  }

  public trackByFn(index: number, item: any){
    return index;
  }

  public toggleMode(){
    this.isDarkMode = !this.isDarkMode;
    DataService.toggleDarkMode.next(this.isDarkMode);
    DataService.isDarkMode = this.isDarkMode;
  }

  public initForm(){
    this.form = this.formBuilder.group({
      language: ['en']
    })
  }

  public changeLanguage(e: any){
    if (this.form.value.language === e.target.value) {
      return;
    }
    this.form.value.language = e.target.value;
    DataService.language.next(this.form.value.language);
  }

  public moveTo() {
    this.isFirstPage = false;
    this.router.navigate(['about'])
  }

  public toggleMenuVisibility(name: string, show: boolean){
    if (show) {
      name === 'menu' ? this.menu.nativeElement.style.display = 'block' : this.lang.map(el => el.nativeElement.style.display = 'block');
      document.querySelector(`.icn-${name}`)?.setAttribute('style', 'display: none;')
      document.querySelector(`.icn-${name}-close`)?.setAttribute('style', 'display: block;')
    } else {
      name === 'menu' ? this.menu.nativeElement.style.display = 'none' : this.lang.map(el => el.nativeElement.style.display = 'none');
      document.querySelector(`.icn-${name}`)?.setAttribute('style', 'display: block;')
      document.querySelector(`.icn-${name}-close`)?.setAttribute('style', 'display: none;')
    }
  }

}

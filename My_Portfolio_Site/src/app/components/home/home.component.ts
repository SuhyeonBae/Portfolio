import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isFirstPage: boolean = false;
  public isDarkMode: boolean = false;
  public languages: Array<string> = ['ENG', 'KOR', 'JPN'];
  public form: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.isFirstPage = this.router.url === '/';
    this.initForm();
  }

  public toggleMode(){
    this.isDarkMode = !this.isDarkMode;
  }

  public initForm(){
    this.form = this.formBuilder.group({
      language: ['ENG']
    })
  }

  public changeLanguage(e: any){
    if (this.form.value.language === e.target.value) {
      return;
    }
    this.form.value.language = e.target.value;
  }

  public moveTo() {
    this.isFirstPage = false;
    this.router.navigate(['about'])
  }

}

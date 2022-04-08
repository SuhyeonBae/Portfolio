import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title = 'My_Portfolio_Site';
  public language: string = 'en';

  constructor(
    private translate: TranslateService,
    private data: DataService
  ) {
    translate.setDefaultLang('en');
    DataService.language.subscribe(res => {
      this.language = res;
      translate.use(this.language);
    })
  }
}

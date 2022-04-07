import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public isDarkMode: boolean;
  public skills: Array<string> = ['Angular2+', 'React', 'Typescript', 'Javascript', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'rxjs'];
  public traits: Array<string> = ['Time Management', 'Analysis', 'Problem Solving', 'Team Player', 'Ability to Learn', 'Accuracy', 'Attention to Details', 'Communication'];

  constructor() { }

  ngOnInit(): void {
    DataService.isDarkMode.subscribe(res => {
      this.isDarkMode = res;
    })
  }

}

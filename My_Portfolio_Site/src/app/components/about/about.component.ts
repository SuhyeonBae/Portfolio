import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public isDarkMode: boolean;
  public skills: Array<string> = ['Angular2+', 'React', 'Typescript', 'Javascript', 'HTML', 'CSS', 'SASS', 'Bootstrap', 'rxjs'];
  public traits: Array<string> = ['TIME_MANAGEMENT', 'ANALYSIS', 'PROBLEM_SOLVING', 'TEAM_PLAYER', 'ABILITY_TO_LEARN', 'ACCURACY', 'ATTENTION_TO_DETAILS', 'COMMUNICATION'];

  constructor() { }

  ngOnInit(): void {
    DataService.isDarkMode.subscribe(res => {
      this.isDarkMode = res;
    })
  }



}

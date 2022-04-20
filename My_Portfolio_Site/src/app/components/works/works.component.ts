import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public isDarkMode: boolean = DataService.isDarkMode;
  public works: Array<any> = [
    {
      title: 'PERSONAL_WEBSITE',
      status: 'DONE',
      imgUrl: "../../../assets/images/work1.png",
      wireframeUrl: "https://whimsical.com/portfolio-site-Q2RtpJiNhGibKMf7ABjGaH",
      demoUrl: "https://portfolio-eight-iota-25.vercel.app/",
      githubUrl: "https://github.com/SuhyeonBae/Portfolio/tree/main/My_Portfolio_Site"
    },{
      title: 'WAVVE_CLONE',
      status: 'ONGOING',
      imgUrl: "",
      wireframeUrl: "https://whimsical.com/wavve-clone-2Xf9899E1o3Tad788hYX6o",
      demoUrl: "",
      githubUrl: ""
    },{
      title: 'JS_PLAYGROUND',
      status: 'DONE',
      imgUrl:  "../../../assets/images/work3.jpg",
      wireframeUrl: "",
      demoUrl: "https://js-playground-jade.vercel.app/",
      githubUrl: "https://github.com/SuhyeonBae/TodayILearned/tree/main/JS_Practice"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    DataService.toggleDarkMode.subscribe(res => {
      this.isDarkMode = res;
    })
  }

  public trackByFn(index: number, item: any){
    return index;
  }
}

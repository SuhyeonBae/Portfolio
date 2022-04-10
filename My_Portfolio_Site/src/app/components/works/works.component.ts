import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public works: Array<any> = [
    {
      title: 'PERSONAL_WEBSITE',
      status: 'DONE',
      imgUrl: "https://lh3.googleusercontent.com/6VouuN8ro0qgY9PkeEMg46ajWbGi4cyjSAQH6f-MIk0OYItZK-eFKgoqxs3XUzkABNmdhHOSbIPhb-m2l9QG8FTtYiFSdMz5yYoskp_SvVP1LRI6qeHcw7_922GRVplLhjPkERZzCfDzfU4OdpP6X2bXV39LjIZgY3WzMp61AhzSGNYAvOEJ3Eyv8VXdJ6Nt3MjJ5367GIyzhxnHDw6eaXIqD-yQEdRMQSqKnDNm5-mPpkGtsQ4H2qOhJpi5ycxq6w3M43ny92tiUHSTbSVpW5yteJcwXqUFOwY6EmV26xkganhjinFb0fblCTWx1sRXXcaGoIS5GuKQYjVldqRB9yTwWrR0F8CK93Q7n3mHAIC2zaDKZjkyr755l9bem0Y3IVgS-sMXXhgFGzneyR5gJj-IBWPQ2xKs_utRTgkgmHI7wjqI8gvCQVZKI5qSR6TKWDFCmKj_HQXZbh8FmYXh2ILcGRhFSXHaZ7QxvRCCAF944I7temy6Ii6cfkH7EcQRB52yUe4T1GE1dR3BvELSE6_Xj--46q0IgBdBi7oCLSMMX3IT9prwacsx6wYzMaKIR67iyCqFQAXwQdr6qZ9T41PVeEUmGmZ0B_hEpmGmxZxH1PNvE_IG5xq_8BFzuWV9YQgvOFRiS1u5SHA7SmTjTgj8arMF0L9VpiWDOvYtbKuRMLjtvZT2eusIqKDeNWcfBqhB8lfkeknlfu6dZcG5cgXRGGlAntGkxuobA-Mgdi8Y3JcnHsCV8vx_mBOrcMQwpcBF67c_tJyGZh_E0y3Y_A-j6_0COyisMJeNMsP2jjbfyO4B3_Md1MBibgVrzcKfHZMKUzin-MKniO3v5s18gIaNo_AyQU-4BYFrisRo0A=w807-h407-no?authuser=0",
      wireframeUrl: "https://whimsical.com/portfolio-site-Q2RtpJiNhGibKMf7ABjGaH",
      demoUrl: "https://vercel.com/suhyeonbae/portfolio",
      githubUrl: "https://github.com/SuhyeonBae/Portfolio/tree/main/My_Portfolio_Site"
    },{
      title: 'WAVVE_CLONE',
      status: 'ONGOING',
      imgUrl: "",
      wireframeUrl: "https://whimsical.com/wavve-clone-2Xf9899E1o3Tad788hYX6o",
      demoUrl: "",
      githubUrl: ""
    },{
      title: 'JS_PLAYGRUOND',
      status: 'DONE',
      imgUrl: "https://lh3.googleusercontent.com/UI0q1TaCt4UZcpAyV_hbqaHC2593KGBvF1Y1V7a8Ddc_WXFGIK824AcT3o5lQUaRqOBHB7pdkHlFeDVYB0_2Wp96-HtAleCLIiieh_G6MhOhbSH_5mbUmLA17JyWmCikR7k6AKeVQX1UfMzxHnQvgqHA2MLV4qttS7AVf7flpVvpTsaT6BbOfYAdpj0ZAIX97_48mMqjpz99XxhQZS_Mkqv35Duqdk16yw7DBlPyF49lxx9Oizzd6-pOsox7xk4B7pMB5XdHYeuVAOLGl9V1gmkA7pZffMjgpsOqJvjkeTaEE8lv6KjEtDjFAsooEMtf7y8l0jG_Tl0vqnY_kSZMTMWMuAUAouzRjVteTbq5gUwwkkJ3_Fu1zQ5POjjFky2JxwR_c5BQj9tAimG4VUSZKV8Ua0S-7rDCEJLk7HV9a6Pk1ABcjmQmYNrbH9QpBN8U8Ae6kZfVqtcvrK_QDu5OPjww73T8ZOQPa5fPtbOTwtj3QF2NOV3ZSlzqi6jfzXmEE7F4tYOrohN7mn6-0EfxzvvoK88kQJcNL1R7u3PPtl19rCC7qGu7zoLa7IvQ-hOd8N9aDpoYCNQSv0Qefx55KYbhklyeL5Juew0tI2PeJAz5ddg8zyqMXODmSX4x86IQR1LsQlwCsY2dCPW0t3QpJi3CKTIYI1xqW8gyGIIdSKTarJ2BE9-Ksm-wL94WoJsMKjZwCZJ9qNszVShmJQPmTqw3uYb8dK6zxU09RzvCRbos_4nR1M2MjCDIvxL9GXn6MoMl8sabwm9PHJEfikaEs6LrFa_eVZlwbnLzsgO5wAILpepv2ETszIY59GE04AfCOgS66xzyBUZrMIZMCmmrXLCtz1HabHEB2D4R6qRs0w=w1536-h762-no?authuser=0",
      wireframeUrl: "",
      demoUrl: "https://js-playground-nine.vercel.app/",
      githubUrl: "https://github.com/SuhyeonBae/TodayILearned/tree/main/JS_Practice"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

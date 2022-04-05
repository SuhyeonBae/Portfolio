import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent},
      { path: 'works', component: WorksComponent}
    ]},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

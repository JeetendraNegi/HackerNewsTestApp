import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HackerNewsListComponent } from './Components/hacker-news-list/hacker-news-list.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'news', component: HackerNewsListComponent},
  { path: '', redirectTo: '/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

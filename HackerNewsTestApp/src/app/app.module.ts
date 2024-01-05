import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerNewsListComponent } from './Components/hacker-news-list/hacker-news-list.component';
import { HackerNewsService } from './Services/hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { NewsItemComponent } from './Components/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HackerNewsListComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Models/item.model';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  APIUrl = 'http://localhost:17508/api/hackernews/topStories';
  constructor(private httpClient: HttpClient) { }

  getTopStories() : Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.APIUrl);
   }
}

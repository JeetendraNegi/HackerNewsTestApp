import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: Item;
  
  constructor() { 
    this.newsItem = new Item();   
  }

  ngOnInit(): void {
  }

}

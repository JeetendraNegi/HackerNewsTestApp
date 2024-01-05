import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/item.model';
import { HackerNewsService } from 'src/app/Services/hacker-news.service';

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {

  itemData: Item[] = [];
  myData: Item[] = [];
  totalPages : number = 1;
  currentPage : number =1;
  three: number =3;

  constructor(private hackerNewsService: HackerNewsService) {
    this.getTopStories();
   }

  ngOnInit(): void {
  }

  // getting the Top Stories from service
  getTopStories(){
    this.hackerNewsService.getTopStories().subscribe(data => {     
      this.itemData = data.slice(0, 200); 
      this.myData = this.itemData;  
      this.totalPages = Math.round(this.itemData.length/12);   
      this.pagenation(1);           
    });
  }

  // filtering the data by title
  filterResults(title: string) {
    if (title === "")
    {
      this.myData = this.itemData;  
      this.pagenation(1);   
      return;
    }

    this.myData = this.itemData.filter(
      myData => myData?.title.toLowerCase().includes(title.toLowerCase())
    );   
  }

  // Pagenation
  pagenation(pageNumber: any){
    
    if (pageNumber == "next")
    {
      if (this.currentPage <= this.totalPages) {
        ++this.currentPage;
        if (this.currentPage > 3 && this.currentPage < this.totalPages-1)
        {
          this.three = this.currentPage;
        }
      }
    }
    else if (pageNumber == "previous")
    {
      if (this.currentPage >= 1) {
        --this.currentPage;
        if (this.currentPage > 3 && this.currentPage < this.totalPages-1)
        {
          this.three = this.currentPage;
        }
        else
        {
          this.three = 3;
        }
      }
    }
    else 
    {
      this.currentPage = parseInt(pageNumber);
      if (this.currentPage < 4)
      {
        this.three = 3;
      }
    }
    
    if (Number.isNaN(this.currentPage))
    {
      return;
    }

    let from = this.currentPage > 1 ? (this.currentPage - 1) * 12 + 1 : 1;
    let to = this.currentPage > 1 ? (this.currentPage - 1) * 12 + 12 : 12;
    this.myData = this.itemData.slice(from-1, to);
  }
}

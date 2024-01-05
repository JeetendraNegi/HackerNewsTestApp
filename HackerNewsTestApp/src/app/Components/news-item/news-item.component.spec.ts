import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsItemComponent } from './news-item.component';
import { Item } from 'src/app/Models/item.model';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set newsItem input', () => {
    const item = new Item();
    item.title = 'Test title';
    component.newsItem = item;
    expect(component.newsItem.title).toBe('Test title');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HackerNewsListComponent } from './hacker-news-list.component';
import { HackerNewsService } from 'src/app/Services/hacker-news.service';
import { of } from 'rxjs';

describe('HackerNewsListComponent', () => {
  let component: HackerNewsListComponent;
  let fixture: ComponentFixture<HackerNewsListComponent>;
  let hackerNewsService: HackerNewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HackerNewsListComponent ],
      providers: [HackerNewsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerNewsListComponent);
    component = fixture.componentInstance;
    hackerNewsService = TestBed.inject(HackerNewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get top stories', () => {
    const mockItems = [{ by: "test", id: 1, kids: [], parent: 1, text: "new Text", time:12345678, type: "story",  title: 'Test 1', url: 'test' }, {  by: "test", id: 1, kids: [], parent: 1, text: "new Text", type:'story', time:12345678, title: 'Test 2', url: 'test' }];
    spyOn(hackerNewsService, 'getTopStories').and.returnValue(of(mockItems));
    component.getTopStories();
    expect(component.itemData.length).toBe(2);
    expect(component.myData.length).toBe(2);
  });

  it('should filter results', () => {
    component.itemData = [{ by: "test", id: 1, kids: [], parent: 1, text: "new Text", time:12345678, type: "story",  title: 'Test 1', url: 'http://test.com' }, {  by: "test", id: 1, kids: [], parent: 1, text: "new Text", type:'story', time:12345678, title: 'Test 2', url: 'http://test2.com' }];
    component.filterResults('Test 1');
    expect(component.myData.length).toBe(1);
  });

  it('should handle pagination', () => {
    component.itemData = Array(24).fill({ title: 'Test' });
    component.pagenation('next');
    expect(component.currentPage).toBe(2);
    expect(component.myData.length).toBe(12);
  });
});

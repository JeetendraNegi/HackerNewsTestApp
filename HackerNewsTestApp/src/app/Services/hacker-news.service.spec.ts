import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HackerNewsService]
    });

    service = TestBed.inject(HackerNewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch top stories', () => {
    const dummyItems = [
      { by: "test", id: 1, kids: [], parent: 1, text: "new Text", time:12345678, type: "story",  title: 'Test 1', url: 'http://test.com' },
      {  by: "test", id: 1, kids: [], parent: 1, text: "new Text", type:'story', time:12345678, title: 'Test 2', url: 'http://test2.com' }
    ];

    service.getTopStories().subscribe(items => {
      expect(items.length).toBe(2);
      expect(items).toEqual(dummyItems);
    });

    const req = httpMock.expectOne(service.APIUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyItems);
  });
});

import { Item } from './item.model';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let item = new Item();
    item.by = 'test';
    item.id = 1;
    item.kids = [1, 2, 3];
    item.parent = 0;
    item.text = 'test text';
    item.time = 1234567890;
    item.type = 'story';
    item.url = 'http://test.com';
    item.title = 'test title';
    expect(item.by).toEqual('test');
    expect(item.id).toEqual(1);
    expect(item.kids).toEqual([1, 2, 3]);
    expect(item.parent).toEqual(0);
    expect(item.text).toEqual('test text');
    expect(item.time).toEqual(1234567890);
    expect(item.type).toEqual('story');
    expect(item.url).toEqual('http://test.com');
    expect(item.title).toEqual('test title');
  });
});

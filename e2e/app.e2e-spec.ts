import { NgSassPage } from './app.po';

describe('ng-sass App', () => {
  let page: NgSassPage;

  beforeEach(() => {
    page = new NgSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

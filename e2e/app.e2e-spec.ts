import { OleWebsitePage } from './app.po';

describe('ole-website App', function() {
  let page: OleWebsitePage;

  beforeEach(() => {
    page = new OleWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ole works!');
  });
});

import { browser, element, by } from 'protractor';

export class OleWebsitePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ole-root h1')).getText();
  }
}

import { ArjaynacionGihubIoPage } from './app.po';

describe('arjaynacion-gihub-io App', () => {
  let page: ArjaynacionGihubIoPage;

  beforeEach(() => {
    page = new ArjaynacionGihubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

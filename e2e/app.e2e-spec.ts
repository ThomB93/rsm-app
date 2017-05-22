import { RsmAppPage } from './app.po';

describe('rsm-app App', () => {
  let page: RsmAppPage;

  beforeEach(() => {
    page = new RsmAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

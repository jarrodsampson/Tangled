import { TangledPage } from './app.po';

describe('tangled App', () => {
  let page: TangledPage;

  beforeEach(() => {
    page = new TangledPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

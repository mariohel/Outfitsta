import { OutfitstaPage } from './app.po';

describe('outfitsta App', () => {
  let page: OutfitstaPage;

  beforeEach(() => {
    page = new OutfitstaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

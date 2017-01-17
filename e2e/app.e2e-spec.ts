import { MaterialAngular2Page } from './app.po';

describe('material-angular2 App', function() {
  let page: MaterialAngular2Page;

  beforeEach(() => {
    page = new MaterialAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

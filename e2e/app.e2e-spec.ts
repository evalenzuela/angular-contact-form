import { AngularContactFormPage } from './app.po';

describe('angular-contact-form App', () => {
  let page: AngularContactFormPage;

  beforeEach(() => {
    page = new AngularContactFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

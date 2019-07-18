import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to the Calculator');
  });

  describe('onclick of plus button', () => {
    it('plus button exists with inner text "+"', () => {
      page.navigateTo();
      expect(page.getPlusButton().getText()).toEqual('+');
    });

    it('should display plus symbol in calculator window', async () => {
      page.navigateTo();
      page.getNumberButton().click();
      page.getPlusButton().click();
      expect(page.getCalculatorDisplay().getText()).toContain('+');
    });
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});

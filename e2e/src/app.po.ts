import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPlusButton() {
    return element(by.id('13'));
  }

  getCalculatorDisplay() {
    return element(by.css('.display'));
  }

  getNumberButton() {
    return element(by.id('2'));
  }

  getEqualsButton() {
    return element(by.id('15'));
  }
}

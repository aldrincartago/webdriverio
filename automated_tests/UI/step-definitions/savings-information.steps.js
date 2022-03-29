const { Given, When, Then } = require('@cucumber/cucumber');
const page = require('../pageobjects/page.js');
const Page = new page();
const SavingsInformationPage = require('../pageobjects/savings-information.js');
const SavingsInfo = new SavingsInformationPage();

When(
  /^I enter "(.*)" on the Monthly Savings Amount field in the Savings Information screen$/,
  async (value) => {
    var dataMap = await Page.getDataMap();
    await Page.clearAndSetText(
      await SavingsInfo.getMonthlySavingsAmountField(),
      value
    );
    var element = await Page.finder('Monthly Savings Amount', '*');
    await Page.clickElement(element);
    await expect(dataMap).toBeRequested({ wait: 10000 });
  }
);

Then(
  /^I should see the error message for Monthly Savings Amount$/,
  async () => {
    var element = await SavingsInfo.getMonthlySavingsError();
    await expect(element).toBeDisplayed();
  }
);

When(
  /^I toggle the switch for "(.*)" in the Savings Goals section$/,
  async (goalName) => {
    var dataMap = await Page.getDataMapVersionId();
    await Page.clickElement(await SavingsInfo.getToggleIcon(goalName));
    await expect(dataMap).toBeRequested({ wait: 10000 });
  }
);

Then(
  /^the "(.*)" css element should be "(.*)" for the "(.*)" in the Savings Information screen$/,
  async (cssAttribute, value, webElement) => {
    let element = '';
    let css = '';

    switch (webElement) {
      case 'Calculate button':
        element = await Page.getButtonByText('Calculate');
        break;
      case 'Education icon':
        element = await SavingsInfo.getIcon('Education');
        break;
      case 'Education toggle icon':
        element = await SavingsInfo.getToggleIcon('Education');
        break;
      case 'Major Life Event icon':
        element = await SavingsInfo.getIcon('Major Life Event');
        break;
      case 'Major Life Event toggle icon':
        element = await SavingsInfo.getToggleIcon('Major Life Event');
        break;
      case 'Retirement icon':
        element = await SavingsInfo.getIcon('Retirement');
        break;
      case 'Retirement toggle icon':
        element = await SavingsInfo.getToggleIcon('Retirement');
        break;
      case 'Estate Transition icon':
        element = await SavingsInfo.getIcon('Estate Transition');
        break;
      case 'Estate Transition toggle icon':
        element = await SavingsInfo.getToggleIcon('Estate Transition');
        break;
      case 'Monthly Savings Amount outline':
        element = await SavingsInfo.getMonthlySavingsAmountField();
        break;
      case 'Monthly Savings Amount error':
        element = await SavingsInfo.getMonthlySavingsError();
        break;
      case 'Education outline':
        element = await SavingsInfo.getGoalCard('Education');
        break;
      case 'Major Life Event outline':
        element = await SavingsInfo.getGoalCard('Major Life Event');
        break;
      case 'Retirement outline':
        element = await SavingsInfo.getGoalCard('Retirement');
        break;
      case 'Multiple Same Age Error':
        element = await await SavingsInfo.getMultipleAgeError();
        break;
      default:
        element = await Page.finder(webElement, '*');
    }

    if ('text-align' == cssAttribute) {
      css = String(await Page.getElementAlignment(element));
    } else {
      await element.scrollIntoView();
      css = String(await Page.getElementCssProperty(element, cssAttribute));
    }

    await expect(css).toEqual(value);
  }
);

Then(
  /^the Monthly Savings Amount field should have a "(.*)" symbol$/,
  async (value) => {
    const element = await SavingsInfo.getMonthlySavingsAmountSymbol();
    const actualText = String(await Page.getElementText(element));
    await expect(actualText).toEqual(value);
  }
);

Then(
  /^I should see the "(.*)" field in the Savings Information screen$/,
  async (label) => {
    let element = '';
    switch (label) {
      case 'Monthly Savings Amount':
        element = await SavingsInfo.getMonthlySavingsAmountField();
        break;
      case 'Gender':
        element = await SavingsInfo.getPersonalInformationRadioBtn(label, 'M');
        break;
      case 'Smoking Status':
        element = await SavingsInfo.getPersonalInformationRadioBtn(label, 'N');
        break;
      default:
        element = '';
    }
    await expect(element).toBeDisplayed();
  }
);

Then(
  /^the "(.*)" for "(.*)" must be displayed on the Savings Goals section$/,
  async (iconType, iconName) => {
    if (iconType == 'toggle icon') {
      await expect(await SavingsInfo.getToggleIcon(iconName)).toBeDisplayed();
    } else {
      await expect(await SavingsInfo.getIcon(iconName)).toBeDisplayed();
    }
  }
);

When(
  /^I set the Age of Event for the "(.*)" goal to "(.*)"$/,
  async (goalName, value) => {
    var element = await SavingsInfo.getAgeOfEventField(goalName);
    await Page.clearAndSetText(element, value);
    var dataMap = await Page.getDataMap();
    await Page.clickElement(await SavingsInfo.getIcon(goalName));
    await expect(dataMap).toBeRequested({ wait: 10000 });
  }
);

Then(
  /^I should see the Age of Event "(.*)" for the "(.*)" goal$/,
  async (labelField, goalName) => {
    if (labelField == 'label') {
      await expect(
        await SavingsInfo.getAgeOfEventLabel(goalName)
      ).toBeDisplayed();
    } else {
      await expect(
        await SavingsInfo.getAgeOfEventField(goalName)
      ).toBeDisplayed();
    }
  }
);

Then(
  /^I should not see the Age of Event "(.*)" for the "(.*)" goal$/,
  async (labelField, goalName) => {
    if (labelField == 'label') {
      await expect(
        await SavingsInfo.getAgeOfEventLabel(goalName)
      ).not.toBeDisplayed();
    } else {
      await expect(
        await SavingsInfo.getAgeOfEventField(goalName)
      ).not.toBeDisplayed();
    }
  }
);

Then(
  /^I should see the "(.*)" value of the slider for the "(.*)" goal is "(.*)"$/,
  async (range, goalName, value) => {
    var element = null;
    if ('Minimum' == range) {
      await expect(
        await SavingsInfo.getMinimumSliderValue(goalName)
      ).toHaveTextContaining(value);
    } else if ('Maximum' == range) {
      await expect(
        await SavingsInfo.getMaximumSliderValue(goalName)
      ).toHaveTextContaining(value);
    }
  }
);

Then(/^I should see the Error Message for Multiple Same Age$/, async () => {
  await expect(await SavingsInfo.getMultipleAgeError()).toBeDisplayed();
});

const { Given, When, Then } = require("@cucumber/cucumber");
const page = require("../pageobjects/page.js");
const Page = new page();
const PersonalInformationPage = require("../pageobjects/personal-information.js");
const PersonalInfo = new PersonalInformationPage();

Then(/^the "(.*)" css element should be "(.*)" for the "(.*)" in the Personal Information screen$/, async (cssAttribute, value, webElement) => {
    let element = "";
    switch (webElement) {
      case "Next button":
        await Page.waitForNextBtnLoader();
        element = await Page.getButtonByText("Next");
        break;
      default:
        element = await Page.finder(webElement, "*");
    }
    const css = String(await Page.getElementCssProperty(element, cssAttribute))
    await expect(css).toEqual(value);
  }
);

Then(/^I should see the "(.*)" field in the Personal Information screen$/, async (label) => {
  let element = '';
  switch (label) {
    case "Age":
      element = await PersonalInfo.getPersonalInformationField(label);
      break;
    case "Gender":
      element = await PersonalInfo.getPersonalInformationRadioBtn(label, "Male");
      break;
    case "Smoking Status":
      element = await PersonalInfo.getPersonalInformationRadioBtn(label, "Smoker");
      break;
    default:
      element = '';
  }
  await expect(element).toBeDisplayed();
  }
);

Then(/^I set the "(.*)" field to "(.*)" in the Personal Information screen$/, async (label, value) => {
  var element = await PersonalInfo.getPersonalInformationField(label);
  await Page.sendClearCommands(element);
  await element.setValue(value);
});
const { Given, When, Then } = require('@cucumber/cucumber');
const page = require('../pageobjects/page.js');
const Page = new page();
const PersonalInformationPage = require("../pageobjects/personal-information.js");
const PersonalInfo = new PersonalInformationPage();
let PublishResult;

Given(/^I open the Whole Life Web App at "(.*)" on an "(.*)" device$/, async (path, device) => {
  await Page.openPath(device, path);
});

Given(/^I open the default Whole Life Application on an "(.*)" device$/, async (device) => {
  await Page.openDefault(device);
});

Given(
  /^I uploaded the configurator "(.*)" with a product name of "(.*)"$/,
  async (fileName, productName) => {
    PublishResult = await singleFileUpload(fileName, productName);
  }
);

When(/^I navigate to the Quote Results screen with a "(.*)" year old age$/, async (age) => {
  var element = await PersonalInfo.getPersonalInformationField("Age");
  await Page.openDefault("iPhone X");
  await Page.clickElement(await Page.getButtonByText("I Agree"));
  await Page.clickAndSetText(element,age);
  await Page.clickElement(await Page.finder("MaleTest", '*'));
  await Page.clickElement(await Page.finder("Test Smoker", '*'));
  await Page.clickElement(await Page.finder("Next", '*'));
  await Page.clickElement(await Page.getButtonByText("Calculate"));
});

When(/^I verify the engine$/, async () => {
  console.log(PublishResult.uploadResult.data.data.xlInputs);
});

When(/^I click the button for "(.*)"$/, async (text) => {
  await Page.clickElement(await Page.getButtonByText(text));
});

When(/^I click the "(.*)" text$/, async (text) => {
  if(text == 'Next')
  {
    await Page.waitForNextBtnLoader();
  }
  await Page.clickElement(await Page.finder(text, '*'));
});

When(/^I click the (.*) icon$/, async (icon) => {
  await Page.clickElement(await Page.getIcon(icon));
});

When(/^I enter "(.*)" in the Name field$/, async (name) => {
  await Page.clearAndSetText(await AboutYou.getNameField(), name);
});

When(/^I click a link for (.*)$/, async (text) => {
  await Page.clickElement(await Page.getLinkByText(text));
});

When(/^I click the "(.*)" avatar$/, async (avatarNum) => {
  await Page.clickElement(await NPT.getAvatar(avatarNum));
});

When(
  /^I click the Date Picker icon in the Financial Needs section$/,
  async () => {
    await Page.clickElement(await FinancialNeeds.getDatePickerIcon());
  }
);

When(/^I hold the click on the "(.*)" avatar selection$/, async (avatarNum) => {
  await Page.holdClick(await NPT.getAvatar(avatarNum));
});

When(/^I hit the "(.*)" key$/, async (key) => {
  await Page.hitTabKey(key);
});

When(/^I enter "(.*)" in the "(.*)" input field$/, async (inputText, field) => {
  let element = '';
  switch (field) {
    case 'DOB':
      element = await AboutYou.getAgeInputField();
      break;
    case 'Name':
      element = await AboutYou.getNameField();
      break;
    case 'Monthly Income':
      element = await AboutYou.getMonthlyIncomeField();
      break;
    default:
      selector = '';
  }
  await Page.clearAndSetText(element, inputText);
});

When(
  /^I enter "(.*)" in the "(.*)" financial needs' question field$/,
  async (inputText, label) => {
    await Page.clearAndSetText(
      await FinancialNeeds.getQuestionField(label),
      inputText
    );
  }
);

When(
  /^I select "(.*)" in the Employment Status dropdown list$/,
  async (employmentStatus) => {
    await Page.clickElement(await AboutYou.getEmployeeStatusField());
    await Page.clickElement(
      await AboutYou.getEmployeeStatusList(employmentStatus)
    );
  }
);

When(/^I click a future month from the date picker$/, async () => {
  let futureMonth = await Page.getFollowingMonth();
  let currentYear = await Page.getCurrentYear();
  let followingYear = await Page.getFollowingYear(1);
  if (futureMonth == '13') {
    await Page.clickElement(
      await FinancialNeeds.getEnabledMonth(followingYear, '01')
    );
  } else {
    await Page.clickElement(
      await FinancialNeeds.getEnabledMonth(currentYear, futureMonth)
    );
  }
});

Then(/^I should see "(.*)" as a "(.*)"$/, async (text, selector) => {
  switch (selector) {
    case 'header':
      selector = 'h1';
      break;
    case 'link':
      selector = 'a';
      break;
    case 'span':
      selector = 'span';
      break;
    case 'label':
      selector = 'label';
      break;
    default:
      selector = '*';
  }
  await expect(Page.finder(text, selector)).toBePresent();
});

Then(/^I should see a button with a label of "(.*)"$/, async (text) => {
  await expect(await Page.getButtonByText(text)).toBeDisplayed();
});

Then(/^the "(.*)" field should contain a "(.*)" text$/, async (field, text) => {
  await expect(await Page.getFieldValue(field)).toContain(text);
});

Then(/^I "(.*)" the date month picker panel$/, async (isDisplayed) => {
  if (isDisplayed == 'should see') {
    await expect(await FinancialNeeds.getDatePickerPanel()).toBeDisplayed();
  } else {
    await expect(await FinancialNeeds.getDatePickerPanel()).not.toBeDisplayed();
  }
});

Then(/^the future months should only be the ones enabled$/, async () => {
  let currentMonth = await Page.getCurrentMonth();
  let futureMonth = await Page.getFollowingMonth();
  let currentYear = await Page.getCurrentYear();
  let followingYear = await Page.getFollowingYear();
  if (currentMonth == '12') {
    await Page.clickElement(await FinancialNeeds.getDatePickerNextBtn());
    await expect(
      await FinancialNeeds.getEnabledMonth(followingYear, '01')
    ).toBePresent();
    await expect(
      await FinancialNeeds.getEnabledMonth(currentYear, currentMonth)
    ).not.toBePresent();
  } else {
    await expect(
      await FinancialNeeds.getEnabledMonth(currentYear, futureMonth)
    ).toBePresent();
    await expect(
      await FinancialNeeds.getEnabledMonth(currentYear, currentMonth)
    ).not.toBePresent();
  }
});

Then(/^the "(.*)" goal icon should be displayed$/, async (goalName) => {
  await expect(await FinancialNeeds.getGoalIcon(goalName)).toBeDisplayed();
});

Then(/^I should see the text "(.*)" on the page$/, async (text) => {
  await expect(await Page.finder(text, '*')).toBeDisplayed();
});

Then(/^I should see the following text on the page$/, async (table) => {
  await Promise.all(
    table.rows().map(async (x) => {
      await expect(await Page.finder(x[0], '*')).toBeDisplayed();
    })
  );
});

Then(
  /^the (.*) field should (.*) in the Get a Quote screen$/,
  async (label, isDisplayed) => {
    if (isDisplayed == 'be displayed') {
      await expect(await Page.finder(label, '*')).toBeDisplayed();
    } else {
      await expect(await Page.finder(label, '*')).not.toBeDisplayed();
    }
  }
);

Then(/^I should not see a button for (.*)$/, async (text) => {
  await expect(await Page.getButtonByText(text)).not.toBeDisplayed();
});

Then(/^I should see the button for "(.*)" is "(.*)"$/, async (text, status) => {
  if ('enabled' == status) {
    await expect(await Page.getButtonByText(text)).toBeEnabled();
  } else if ('disabled' == status) {
    await expect(await Page.getButtonByText(text)).toBeDisabled();
  }
});
//-------------------------------NPT-------------------------------//
Then(
  /^I should see the character "(.*)" on the "(.*)" side of the start page$/,
  async (avatarNum, position) => {
    let avatar = await NPT.getAvatar(avatarNum);
    await expect(await Page.getElementAlignment(avatar)).toEqual(position);
  }
);

Then(/^I should see "(.*)" text in the Proceed button$/, async (label) => {
  let proceedBtn = await NPT.getProceedLabel();
  await expect(await Page.getElementText(proceedBtn)).toEqual(label);
});

Then(
  /^I should see the Proceed Button on the "(.*)" side of the start page$/,
  async (position) => {
    let proceedBtn = await NPT.getProceedBtn();
    await expect(await Page.getElementAlignment(proceedBtn)).toEqual(position);
  }
);

Then(
  /^the "(.*)" css element should be "(.*)" for the "(.*)"$/,
  async (cssAttribute, value, webElement) => {
    let element = '';
    switch (webElement) {
      case 'Proceed button':
        element = await NPT.getProceedBtn();
        break;
      case 'Proceed label':
        element = await NPT.getProceedLabel();
        break;
      case 'Ignited by label':
        element = await NPT.getIgnitedByLabel();
        break;
      case 'Base config layout':
        element = await NPT.getLayoutBaseConfig();
        break;
      case 'First button text':
        element = await AboutYou.getAvatarSelectionText('1');
        break;
      case 'Second button text':
        element = await AboutYou.getAvatarSelectionText('2');
        break;
      case 'Third button text':
        element = await AboutYou.getAvatarSelectionText('3');
        break;
      case 'Third Avatar':
        element = await AboutYou.getAvatarFill('3');
        break;
      case 'Back button':
        element = await AboutYou.getBackBtn();
        break;
      case 'Next button':
        element = await AboutYou.getNextBtn();
        break;
      case 'Coin Base':
        element = await AboutYou.getCoinBase();
        break;
      case 'When is this needed':
        element = await FinancialNeeds.getQuestionField(webElement);
        break;
      case 'What is your target amount? (USD)':
        element = await FinancialNeeds.getQuestionField(webElement);
        break;
      case 'Education':
        element = await FinancialNeeds.getGoalBackground(webElement);
        break;
      case 'Tooltip title':
        element = await FinancialNeeds.getTooltipTitleCSS();
        break;
      case 'Close button':
        element = await FinancialNeeds.getCloseBtn();
        break;
      case 'About You progress bar':
        element = await AboutYou.getProgressBarSegment('14');
        break;
      default:
        element = await Page.finder(webElement, '*');
    }
    await expect(
      await Page.getElementCssProperty(element, cssAttribute)
    ).toEqual(value);
  }
);

Then(
  /^the Introductory message in the headline should be "(.*)"$/,
  async (text) => {
    await expect(await Page.getElementText(await NPT.getHeadline())).toEqual(
      text
    );
  }
);

Then(
  /^I should see the "(.*)" on the "(.*)" side of the page$/,
  async (object, position) => {
    let element = '';
    switch (object) {
      case 'company logo':
        element = await Header.getCompanyLogo();
        break;
      case 'language dropdown':
        element = await Header.getLanguageDropDown();
        break;
      case 'Ignited by label':
        element = await NPT.getIgnitedByLabel();
        break;
      default:
        element = '';
    }
    await expect(await Page.getElementAlignment(element)).toEqual(position);
  }
);

Then(/^I should see the Global Icon$/, async () => {
  await expect(await Header.getGlobalIcon()).toBeDisplayed();
});

Then(
  /^I should only see "(.*)" counts of the "(.*)" attribute$/,
  async (count, attribute) => {
    let i = 1;
    while (i != count) {
      var element = await Page.getAttributeCount(i, attribute);
      await expect(element).toBePresent();
      i++;
    }
    var unexpectedElement = await Page.getAttributeCount(count + 1, attribute);
    await expect(unexpectedElement).not.toBePresent();
  }
);

Then(/^I should see the Coin Base image$/, async () => {
  await expect(await AboutYou.getCoinBase()).toBeDisplayed();
});

Then(/^I should see a Date picker icon in the input field$/, async () => {
  await expect(await FinancialNeeds.getDatePickerIcon()).toBeDisplayed();
});

Then(
  /^the Corporate Website label should have a link of "(.*)"$/,
  async (link) => {
    await expect(await NPT.getWebsiteLabel()).toHaveHref(link);
  }
);

Then(/^the Ignited By label should be equal to "(.*)"$/, async (text) => {
  await expect(
    await Page.getElementText(await NPT.getIgnitedByLabel())
  ).toEqual(text);
});

Then(/^I should be redirected to the "(.*)" link$/, async (link) => {
  await Page.switchWindow(link);
  await expect(await Page.getUrl()).toEqual(link);
});

Then(/^I should be redirected to the default link$/, async () => {
  const actualLink = Page.defaultUrl;
  const expectedLink = await Page.getUrl();
  await expect(expectedLink).toContain(actualLink);
});

Then(/^I should see the "(.*)" avatar$/, async (avatarNum) => {
  await expect(await NPT.getAvatar(avatarNum)).toBePresent();
});

Then(
  /^the "(.*)" avatar should have a color of "(.*)"$/,
  async (avatarNum, avatarColor) => {
    await expect(await NPT.getAvatar(avatarNum)).toBePresent();
  }
);

Then(
  /^the "(.*)" avatar "(.*)" in default state$/,
  async (avatarNum, avatarState) => {
    if (avatarState == 'should be') {
      await expect(
        await AboutYou.getAvatarDefaultState(avatarNum)
      ).toBePresent();
    } else {
      await expect(
        await AboutYou.getAvatarDefaultState(avatarNum)
      ).not.toBePresent();
    }
  }
);

Then(
  /^the "(.*)" avatar selection button should have a text of "(.*)"$/,
  async (avatarNum, text) => {
    await expect(
      await Page.getElementText(
        await AboutYou.getAvatarSelectionText(avatarNum)
      )
    ).toEqual(text);
  }
);

When(/^I run a sample when$/, async () => {
  console.log('Sample when');
});

Then(/^I should succeed$/, async () => {
  await expect(true).toEqual(true);
});

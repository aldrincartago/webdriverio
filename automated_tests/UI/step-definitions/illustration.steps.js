const { Given, When, Then } = require("@cucumber/cucumber");
const page = require("../pageobjects/page.js");
const Page = new page();
const IllustrationPage = require("../pageobjects/illustration.js");
const illustration = new IllustrationPage();

Then(/^I "(.*)" the Graph scroll bar$/, async (isDisplayed) => {
  var element = await illustration.getScrollBarSlide();
  if(isDisplayed == "should see"){
    await expect(element).toBeDisplayed();
  }
  else{
    await expect(element).not.toBeDisplayed();
  }
});

Then(/^I should see "(.*)" vertical bars inside the graph$/, async (barCount) => {
  const element = "recharts-layer recharts-bar-rectangle";
  await expect(await Page.getAttributeCount(barCount, element)).toBeDisplayed();
});

Then(/^I move the scroll bar to the right-most part$/, async () => {
  const elem = await illustration.getScrollBarSlide();
  await elem.dragAndDrop({ x: 200, y: 100 })
});

Then(/^the "(.*)" css element should be "(.*)" for the "(.*)" in the Illustration screen$/, async (cssAttribute, value, webElement) => {
  let element = "";
  switch (webElement) {
    case "Horizontal scroll bar":
      element = await illustration.getScrollBarStroke();
      break;
    default:
      element = await Page.finder(webElement, "*");
  }
  const css = String(await Page.getElementCssProperty(element, cssAttribute))
  await expect(css).toEqual(value);
}
);
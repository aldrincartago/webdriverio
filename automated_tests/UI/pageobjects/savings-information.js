module.exports = class SavingsInformationPage {
  getMonthlySavingContainer() {
    return '//*[text()="Monthly Savings Amount"]//parent::div';
  }

  async getMonthlySavingsAmountField() {
    var container = this.getMonthlySavingContainer();
    return await $(container + '//input');
  }
  
  async getMonthlySavingsAmountSymbol() {
    var element = await this.getMonthlySavingsAmountField();
    return await element.$('.//following-sibling::div');
  }

  async getMonthlySavingsError() {
    var container = this.getMonthlySavingContainer();
    return await $(container + '//div[contains(text(), "Please input value between")]');
  }

  getGoalContainer(goalName) {
    return '//div[text()="' + goalName + '"]//ancestor::div[contains(@class, "ant-space-item")]';
  }

  async getGoalCard(goalName) {
    return await $(this.getGoalContainer(goalName) + '//div[@data-testid="savings-goal-container"]');
  }

  async getIcon(goalName) {
    return await $(this.getGoalContainer(goalName) + '//*[name()="svg"]');
  }

  async getToggleIcon(goalName) {
    return await $(this.getGoalContainer(goalName) + '//button[@role="switch"]');
  }

  async getAgeOfEventLabel(goalName) {
    return await $(this.getGoalContainer(goalName) + '//*[text()="Age at time of event"]');
  }

  async getAgeOfEventField(goalName) {
    return await $(this.getGoalContainer(goalName) + '//input');
  }

  async getMinimumSliderValue(goalName) {
    var sliderLocator = '//span[contains(@class, "ant-slider-mark-text") and contains(@style, "left: 0%")]';
    return await $(this.getGoalContainer(goalName) + sliderLocator);
  }
  
  async getMaximumSliderValue(goalName) {
    var sliderLocator = '//span[contains(@class, "ant-slider-mark-text") and contains(@style, "left: 100%")]';
    return await $(this.getGoalContainer(goalName) + sliderLocator);
  }

  async getMultipleAgeError() {
    return await $('//div[text()="You cannot have the same age for more than 1 event."]');
  }
};

module.exports = class Page {
  constructor() {
    this.currentUUID = process.env.SERVICE_UUID;
    this.tenantName = process.env.REACT_APP_SPARK_TENANT;
    this.defaultUrl = 'WL?tenant=' + this.tenantName + '&service_uuid=';
    this.dataMap = '';
  }

  getCurrentUUID() {
    return this.currentUUID;
  }

  async openDefault(device) {
    await browser.url(this.defaultUrl + this.currentUUID);
    await browser.emulateDevice(device);
    await browser.pause(1500);
  }

  async openPath(device, path) {
    await browser.url(this.defaultUrl + this.currentUUID + '#' + path);
    await browser.emulateDevice(device);
    await browser.pause(1500);
  }

  async switchWindow(link) {
    await browser.switchWindow(link);
  }

  async getUrl() {
    var url = await browser.getUrl();
    return url;
  }

  async setupInterceptor() {
    await browser.setupInterceptor();
    var request = await browser.getRequest(0);
    return request;
  }

  async pause(time) {
    await browser.pause(time);
  }

  async clickElement(element) {
    await element.waitForClickable();
    await element.click();
    await browser.pause(1500);
    await this.waitForApiLoader();
  }

  async waitForNextBtnLoader() {
    var loader = await $('//span[@class="ant-btn-loading-icon"]');
    await loader.waitForExist({ reverse: true, timeout: 20000 });
  }

  async waitForApiLoader() {
    var loader = await $('//div[@data-testid="api-loader"]');
    await loader.waitForExist({ reverse: true, timeout: 20000 });
  }

  async sendClearCommands(element) {
    await element.scrollIntoView();
    await element.click(element);
    await browser.keys(['Control', 'a', 'Backspace']);
  }

  async hitTabKey(key) {
    await browser.keys([key]);
  }

  async setText(element, text) {
    await element.waitForEnabled();
    await element.setValue(text);
  }

  async clearAndSetText(element, text) {
    await element.scrollIntoView();
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.click();
    await browser.keys(['Meta', 'a']);
    await browser.keys(['Backspace']);
    await element.setValue(text);
    await browser.keys(['Enter']);
  }

  async clickAndSetText(element, text) {
    await element.scrollIntoView();
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.click();
    await browser.keys(['Meta', 'a']);
    await browser.keys(['Backspace']);
    await element.setValue(text);
    await browser.keys(['Enter']);
  }

  async getElementText(element) {
    var elementText = '';
    if (null != element) {
      await element.getText().then(function (text) {
        elementText = text;
      });
    }
    return elementText;
  }

  async getFieldValue(field) {
    const inputUser = await $('//*[text()="' + field + '"]//..//input');
    const value = await inputUser.getValue();
    console.log(value);
    return value;
  }

  async getElementCssProperty(element, cssProperty) {
    var cssValue = '';
    if (null != element) {
      await browser.pause(500);
      await element.getCSSProperty(cssProperty).then(function (css) {
        cssValue = css;
      });
      if (cssProperty.includes('color')) {
        cssValue = cssValue['parsed']['hex'].toLowerCase();
      } else {
        cssValue = cssValue['value'];
      }
    }
    return cssValue;
  }

  async getFontWeight(element) {
    var cssValue = '';
    if (null != element) {
      cssValue = await this.getElementCssProperty(element, 'font-weight');

      if ('bold' != cssValue) {
        if (cssValue > 400) {
          return 'bold';
        }
      } else {
        return 'bold';
      }
      return '';
    }
    return cssValue;
  }

  async getElementAlignment(element) {
    var cssValue = '';
    if (null != element) {
      cssValue = await this.getElementCssProperty(element, 'text-align');

      if ('start' == cssValue) {
        cssValue = await this.getElementCssProperty(element, 'direction');

        if ('ltr' == cssValue) {
          return 'left';
        }
        return 'right';
      }
    }
    return cssValue;
  }

  async finder(text, selector) {
    return await $('(//' + selector + '[text()="' + text + '"])[1]');
  }

  async getButtonByText(text) {
    return await $(
      '//*[normalize-space(text()) = "' + text + '"]//parent::button'
    );
  }

  async getIcon(icon) {
    return await $(`span.${icon}`);
  }

  async getLinkByText(text) {
    return await $('//a[text() = "' + text + '"]');
  }

  async getAttributeCount(count, value) {
    return await $('(//*[@*="' + value + '"])[' + count + ']');
  }

  async getCurrentMonth() {
    let date_ob = new Date();
    let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);
    return month;
  }

  async getFollowingMonth() {
    let date_ob = new Date();
    let month = ('0' + (date_ob.getMonth() + 2)).slice(-2);
    return month;
  }

  async getCurrentYear() {
    let date_ob = new Date();
    let year = date_ob.getFullYear();
    return year;
  }

  async getFollowingYear() {
    let date_ob = new Date();
    let year = date_ob.getFullYear() + 1;
    return year;
  }

  async getDataMap() {
    this.dataMap = await browser.mock('**/' + this.currentUUID, {
      method: 'POST',
      statusCode: 200,
      postData: (data) => data.includes(this.currentUUID),
    });
    return this.dataMap;
  }

  async getDataMapVersionId() {
    this.dataMap = await browser.mock('**/v3', {
      method: 'POST',
      statusCode: 200,
      postData: (data) => data.includes('calc'),
    });
    return this.dataMap;
  }
};
